import { useQuestionsStore } from '../store/useQuestionsStore'
import { useQuestionsData } from '../hooks/useQuestionsData'

// constants

// component
const propTypes = {}

function Results() {
  const { correct, incorrect } = useQuestionsData()
  const reset = useQuestionsStore((state) => state.reset)

  return (
    <div className="results-background">
      <section className="results">
        <h1>Your Score!</h1>

        <strong>
          <p>✅ {correct} Correct</p>
          <p>❌ {incorrect} Incorrect</p>
        </strong>

        <div>
          <button onClick={() => reset()}>¡Start Again!</button>
        </div>
      </section>
    </div>
  )
}

Results.propTypes = propTypes

export default Results
