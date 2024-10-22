import './App.css'
import { QUESTIONS_LIMIT } from './config'
import { useQuestionsStore } from './store/useQuestionsStore'
import Game from './components/Game'
import { createPortal } from 'react-dom'
import Results from './components/Results'
import { useQuestionsData } from './hooks/useQuestionsData'

function App() {
  const { unanswered } = useQuestionsData()
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  const questions = useQuestionsStore((state) => state.questions)

  const rootModal = document.getElementById('root-modal')
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
        {unanswered === 0 &&
          questions.length > 0 &&
          rootModal &&
          createPortal(<Results />, rootModal)}
      </main>
    </>
  )
}

export default App
