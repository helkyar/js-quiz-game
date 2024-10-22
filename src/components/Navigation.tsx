import { QUESTIONS_LIMIT } from '../config'
import { useQuestionsStore } from '../store/useQuestionsStore'

function Navigation() {
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  return (
    <section className="navigation-section">
      <div className="navigation">
        <button className="prev" onClick={goPreviousQuestion}>
          {'<'}
        </button>
        <span>{`${currentQuestion + 1}/${QUESTIONS_LIMIT}`}</span>
        <button className="next" onClick={goNextQuestion}>
          {'>'}
        </button>
      </div>
      <div className="info">
        <span>{`${1} ✅`}</span>
        <span>{`${2} ❌`}</span>
        <span>{`${3} ❔`}</span>
      </div>
    </section>
  )
}

export default Navigation
