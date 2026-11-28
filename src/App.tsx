import { Suspense, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import type { AnswerRecord, Progress, Question, QuizConfig, QuizResult, Subject, Topic } from './types/quiz'
import { useSubject } from './context/SubjectContext'
import { TOPICS } from './data/topics'
import { bankOf, loadBank, loadBanks } from './data/questionBank'
import { buildMistakeQuiz, buildMockFor, buildTopicQuiz } from './utils/quiz'
import { parentSubjects } from './utils/parentStats'
import { loadProgress, recordQuizResult } from './utils/storage'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import LoadingOverlay from './components/LoadingOverlay'
import ScreenBoundary from './components/ScreenBoundary'
import PinModal from './components/parent/PinModal'
import { ParentScreen, QuizArena, ResultScreen, WardrobeScreen, quizScreen } from './screens'

type Screen = { name: 'home' } | { name: 'wardrobe' } | { name: 'parent' } | { name: 'quiz'; config: QuizConfig; runId: number } | { name: 'result'; result: QuizResult }

export default function App() {
  const { subject } = useSubject()
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [runId, setRunId] = useState(0)
  // Mở khóa khu vực phụ huynh chỉ giữ trong bộ nhớ: tải lại trang là hỏi mã lại.
  const [pinOpen, setPinOpen] = useState(false)
  // Kho câu hỏi của môn (hoặc màn làm bài) chưa tải xong lúc bé bấm bắt đầu: hiện màn chờ (hoặc báo lỗi mạng).
  const [bankState, setBankState] = useState<'loading' | 'error' | null>(null)

  /** Chạy `run` với kho của môn; kho hoặc màn làm bài chưa tải thì hiện màn chờ, tải cả hai song song rồi mới chạy. */
  const withBank = (s: Subject, run: (bank: Question[]) => void) => {
    const ready = bankOf(s)
    if (ready && quizScreen.isLoaded()) return run(ready)
    setBankState('loading')
    Promise.all([loadBank(s), quizScreen.preload()]).then(
      ([bank]) => {
        setBankState(null)
        run(bank)
      },
      () => setBankState('error'),
    )
  }

  const start = (config: QuizConfig) => {
    setRunId((n) => n + 1)
    // Chuỗi đúng liên tiếp hiện có của môn, để màn làm bài hiện tiếp tiến độ mở váy.
    setScreen({ name: 'quiz', config: { ...config, dressRunStart: progress.correctRun[config.subject] ?? 0, startedAt: Date.now() }, runId: runId + 1 })
    window.scrollTo({ top: 0 })
  }

  const startTopic = (topic: Topic) =>
    withBank(TOPICS[topic].subject, (bank) =>
      start({ kind: 'topic', subject: TOPICS[topic].subject, topic, questions: buildTopicQuiz(bank, topic, new Set(progress.seenIds)), timerEnabled: false }),
    )
  const startMock = (timerEnabled: boolean) =>
    withBank(subject, (bank) => start({ kind: 'mock', subject, questions: buildMockFor(subject, bank, new Set(progress.seenIds)), timerEnabled }))
  const startRetry = (questions: Question[], retrySubject: QuizConfig['subject']) =>
    start({ kind: 'retry', subject: retrySubject, questions, timerEnabled: false })

  const finish = (config: QuizConfig, answers: AnswerRecord[]) => {
    const out = recordQuizResult(progress, {
      kind: config.kind,
      subject: config.subject,
      topic: config.topic,
      questions: config.questions,
      answers,
      startedAt: config.startedAt,
    })
    setProgress(out.progress)
    setScreen({
      name: 'result',
      result: { config, answers, stars: out.stars, percent: out.percent, newDresses: out.newDresses },
    })
    window.scrollTo({ top: 0 })
  }

  const goHome = () => {
    setScreen({ name: 'home' })
    window.scrollTo({ top: 0 })
  }

  const openParentScreen = () => {
    setScreen({ name: 'parent' })
    window.scrollTo({ top: 0 })
  }

  // Lần nào mở Góc phụ huynh cũng phải nhập mã, để bé không tự vào được sau khi bố mẹ đã mở.
  // Trong lúc bố mẹ nhập mã, tải sẵn kho các môn mà Góc phụ huynh cần (để hiện câu sai gần đây).
  const requestParent = () => {
    setPinOpen(true)
    loadBanks(parentSubjects(progress)).catch(() => {})
  }

  const openWardrobe = () => {
    setScreen({ name: 'wardrobe' })
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <MotionConfig reducedMotion="user">
        <Header inQuiz={screen.name === 'quiz'} inWardrobe={screen.name === 'wardrobe'} onOpenWardrobe={openWardrobe} />
        <main>
          {/* Màn hình tách chunk riêng (src/screens.ts): chưa tải xong thì hiện màn chờ, tải lỗi thì mời tải lại trang. */}
          <ScreenBoundary>
            <Suspense fallback={<LoadingOverlay state="loading" />}>
              {screen.name === 'home' && <HomeScreen progress={progress} onStartTopic={startTopic} onStartMock={startMock} onOpenParent={requestParent} />}
              {screen.name === 'wardrobe' && <WardrobeScreen progress={progress} onProgressChange={setProgress} onHome={goHome} />}
              {screen.name === 'parent' && (
                <ParentScreen progress={progress} onHome={goHome} onRetry={(qs, s) => startRetry(buildMistakeQuiz(qs), s)} />
              )}
              {screen.name === 'quiz' && (
                <QuizArena
                  key={screen.runId}
                  config={screen.config}
                  onFinish={(answers) => finish(screen.config, answers)}
                  onExit={goHome}
                />
              )}
              {screen.name === 'result' && (
                <ResultScreen
                  result={screen.result}
                  onRetryWrong={(qs) => startRetry(qs, screen.result.config.subject)}
                  onReplay={() => {
                    const c = screen.result.config
                    if (c.kind === 'mock') startMock(c.timerEnabled)
                    else if (c.topic) startTopic(c.topic)
                    else goHome()
                  }}
                  onHome={goHome}
                  onOpenWardrobe={openWardrobe}
                />
              )}
            </Suspense>
          </ScreenBoundary>
        </main>
        {pinOpen && (
          <PinModal
            onClose={() => setPinOpen(false)}
            onSuccess={() => {
              setPinOpen(false)
              openParentScreen()
            }}
          />
        )}
        {bankState && <LoadingOverlay state={bankState} onRetry={() => setBankState(null)} />}
      </MotionConfig>
    </>
  )
}
