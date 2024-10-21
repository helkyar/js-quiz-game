import { useQuestionsStore } from '../store/useQuestionsStore'

function Navigation() {
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )
  return (
    <section className="navigation-section">
      <div className="navigation">
        <button className="prev" onClick={goPreviousQuestion}>
          {'<'}
        </button>{' '}
        {/* TO-DO-fix: should be an icon */}
        <button className="next" onClick={goNextQuestion}>
          {'>'}
        </button>
      </div>
      <div className="info">
        <span>{`${1} Correct`}</span> {/* correct */}
        <span>{`${2} Incorrect`}</span> {/* incorrect */}
        <span>{`${3} Unanswered`}</span> {/* unanswered */}
      </div>
    </section>
  )
}

export default Navigation
