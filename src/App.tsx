import './App.css'
import { QUESTIONS_LIMIT } from './config'
import { useQuestionsStore } from './store/useQuestionsStore'
import Game from './components/Game'

function App() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  const questions = useQuestionsStore((state) => state.questions)

  console.log('🚀 ~ App ~ questions:', questions)

  return (
    <>
      <header>
        <h1>JS Quiz</h1>
      </header>
      <main>
        <Game />
        {questions.length === 0 && (
          <button
            className="start-btn"
            onClick={() => fetchQuestions(QUESTIONS_LIMIT)}
          >
            Start
          </button>
        )}
      </main>
    </>
  )
}

export default App
