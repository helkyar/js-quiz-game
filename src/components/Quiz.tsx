import { useQuestionsStore } from '../store/useQuestionsStore'
import { Question } from '../types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Quiz() {
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const questions = useQuestionsStore((state) => state.questions)
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  return (
    <>
      <section className="questions">
        {questions.map((question: Question, i: number) => (
          <div key={question.id}>
            {i === currentQuestion && (
              <div>
                <p className="title">{question.question}</p>
                <SyntaxHighlighter
                  className="code"
                  language="javascript"
                  style={gradientDark}
                >
                  {question.code}
                </SyntaxHighlighter>
                <div className="options">
                  {question.answers.map((answer, i) => (
                    <button
                      key={i}
                      disabled={question.userSelectedAnswer != null}
                      className={`${
                        question.userSelectedAnswer === i &&
                        !question.isCorrectUserAnswer
                          ? 'incorrect'
                          : ''
                      } ${
                        question.userSelectedAnswer !== undefined &&
                        question.correctAnswer === i
                          ? 'correct'
                          : ''
                      } `}
                      onClick={() => selectAnswer(question.id, i)}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  )
}

export default Quiz
