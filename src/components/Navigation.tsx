import { QUESTIONS_LIMIT } from '../config'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/useQuestionsStore'

function Navigation() {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const automatic = useQuestionsStore((state) => state.automatic)
  const toggleAuto = useQuestionsStore(
    (state) => state.toggleAutomaticNextQuestion
  )

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
      <button className="toggle-auto-btn" onClick={toggleAuto}>
        {automatic ? 'Auto' : 'Manual'}
      </button>
      <div className="info">
        <span>{`${correct} ✅`}</span>
        <span>{`${incorrect} ❌`}</span>
        <span>{`${unanswered} ❔`}</span>
      </div>
    </section>
  )
}

export default Navigation
