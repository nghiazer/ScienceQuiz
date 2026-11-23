import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import type { AnswerRecord, Progress, Question, QuizConfig, QuizResult, Topic } from './types/quiz'
import { useSubject } from './context/SubjectContext'
import { TOPICS } from './data/topics'
import { buildMockFor, buildTopicQuiz } from './utils/quiz'
import { loadProgress, recordQuizResult } from './utils/storage'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import QuizArena from './components/QuizArena'
import ResultScreen from './components/ResultScreen'
import WardrobeScreen from './components/wardrobe/WardrobeScreen'

type Screen = { name: 'home' } | { name: 'wardrobe' } | { name: 'quiz'; config: QuizConfig; runId: number } | { name: 'result'; result: QuizResult }

export default function App() {
  const { subject } = useSubject()
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [runId, setRunId] = useState(0)

  const start = (config: QuizConfig) => {
    setRunId((n) => n + 1)
    setScreen({ name: 'quiz', config, runId: runId + 1 })
    window.scrollTo({ top: 0 })
  }

  const startTopic = (topic: Topic) =>
    start({ kind: 'topic', subject: TOPICS[topic].subject, topic, questions: buildTopicQuiz(topic, new Set(progress.seenIds)), timerEnabled: false })
  const startMock = (timerEnabled: boolean) =>
    start({ kind: 'mock', subject, questions: buildMockFor(subject, new Set(progress.seenIds)), timerEnabled })
  const startRetry = (questions: Question[], retrySubject: QuizConfig['subject']) =>
    start({ kind: 'retry', subject: retrySubject, questions, timerEnabled: false })

  const finish = (config: QuizConfig, answers: AnswerRecord[]) => {
    const out = recordQuizResult(progress, { kind: config.kind, subject: config.subject, questions: config.questions, answers })
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

  const openWardrobe = () => {
    setScreen({ name: 'wardrobe' })
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <MotionConfig reducedMotion="user">
        <Header inQuiz={screen.name === 'quiz'} inWardrobe={screen.name === 'wardrobe'} onOpenWardrobe={openWardrobe} />
        <main>
          {screen.name === 'home' && <HomeScreen progress={progress} onStartTopic={startTopic} onStartMock={startMock} />}
          {screen.name === 'wardrobe' && <WardrobeScreen progress={progress} onHome={goHome} />}
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
        </main>
      </MotionConfig>
    </>
  )
}
