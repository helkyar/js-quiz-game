import { useQuestionsStore } from '../store/useQuestionsStore'
import Navigation from './Navigation'
import Quiz from './Quiz'

function Game() {
  const reset = useQuestionsStore((state) => state.reset)
  const questions = useQuestionsStore((state) => state.questions)

  if (questions.length === 0) return null

  return (
    <div className="card">
      <Navigation />
      <Quiz />{' '}
      {/* TO-DO-fix: passing questions as attribute gives types error */}
      <section className="reset">
        <button onClick={() => reset()}>Reset</button>
      </section>
    </div>
  )
}

export default Game
