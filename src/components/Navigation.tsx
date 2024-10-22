import { QUESTIONS_LIMIT } from '../config'
import { useQuestionsStore } from '../store/useQuestionsStore'

function Navigation() {
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const questions = useQuestionsStore((state) => state.questions)
  const automatic = useQuestionsStore((state) => state.automatic)
  const toggleAuto = useQuestionsStore(
    (state) => state.toggleAutomaticNextQuestion
  )

  const correctAnswers = questions.filter(
    (question) => question.isCorrectUserAnswer
  ).length
  const incorrectAnswers = questions.filter(
    (question) => question.isCorrectUserAnswer === false
  ).length
  const unanswered = QUESTIONS_LIMIT - (correctAnswers + incorrectAnswers)

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
        <span>{`${correctAnswers} ✅`}</span>
        <span>{`${incorrectAnswers} ❌`}</span>
        <span>{`${unanswered} ❔`}</span>
      </div>
    </section>
  )
}

export default Navigation
