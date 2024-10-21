import { useQuestionsStore } from '../store/useQuestionsStore'
import { Question } from '../types'

function Quiz() {
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const questions = useQuestionsStore((state) => state.questions)
  return (
    <>
      <section className="questions">
        {questions.map((question: Question, i: number) => (
          <>
            {i === currentQuestion && (
              <div key={question.id}>
                <p className="title">{question.question}</p>
                <p className="code">{question.code}</p>
                <div className="options">
                  {question.answers.map((answer, i) => (
                    <button key={i}>{answer}</button>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}
      </section>
    </>
  )
}

export default Quiz
