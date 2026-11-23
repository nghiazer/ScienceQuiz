import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import type { AnswerRecord, Progress, Question, QuizConfig, QuizResult, Topic } from './types/quiz'
import { LanguageProvider } from './context/LanguageContext'
import { buildMockTest, buildTopicQuiz } from './utils/quiz'
import { loadProgress, recordQuizResult } from './utils/storage'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import QuizArena from './components/QuizArena'
import ResultScreen from './components/ResultScreen'

type Screen = { name: 'home' } | { name: 'quiz'; config: QuizConfig; runId: number } | { name: 'result'; result: QuizResult }

export default function App() {
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [runId, setRunId] = useState(0)

  const start = (config: QuizConfig) => {
    setRunId((n) => n + 1)
    setScreen({ name: 'quiz', config, runId: runId + 1 })
    window.scrollTo({ top: 0 })
  }

  const startTopic = (topic: Topic) =>
    start({ kind: 'topic', topic, questions: buildTopicQuiz(topic, new Set(progress.seenIds)), timerEnabled: false })
  const startMock = (timerEnabled: boolean) =>
    start({ kind: 'mock', questions: buildMockTest(new Set(progress.seenIds)), timerEnabled })
  const startRetry = (questions: Question[]) =>
    start({ kind: 'retry', questions, timerEnabled: false })

  const finish = (config: QuizConfig, answers: AnswerRecord[]) => {
    const out = recordQuizResult(progress, { kind: config.kind, questions: config.questions, answers })
    setProgress(out.progress)
    setScreen({
      name: 'result',
      result: { config, answers, stars: out.stars, percent: out.percent, newBadges: out.newBadges },
    })
    window.scrollTo({ top: 0 })
  }

  const goHome = () => {
    setScreen({ name: 'home' })
    window.scrollTo({ top: 0 })
  }

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          {screen.name === 'home' && <HomeScreen progress={progress} onStartTopic={startTopic} onStartMock={startMock} />}
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
              onRetryWrong={startRetry}
              onReplay={() => {
                const c = screen.result.config
                if (c.kind === 'mock') startMock(c.timerEnabled)
                else if (c.topic) startTopic(c.topic)
                else goHome()
              }}
              onHome={goHome}
            />
          )}
        </main>
      </MotionConfig>
    </LanguageProvider>
  )
}
