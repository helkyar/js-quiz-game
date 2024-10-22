import { useQuestionsStore } from '../store/useQuestionsStore'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Question } from '../types'

function getOptionClassName(quiz: Question, index: number) {
  const incorrect =
    quiz.userSelectedAnswer === index && !quiz.isCorrectUserAnswer
  const correct =
    quiz.userSelectedAnswer != null && quiz.correctAnswer === index
  return correct ? 'correct' : incorrect ? 'incorrect' : ''
}
function Quiz() {
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const questions = useQuestionsStore((state) => state.questions)
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)
  const quiz = questions[currentQuestion]

  return (
    <>
      <section className="questions">
        <div>
          <p className="title">{quiz.question}</p>
          <SyntaxHighlighter
            className="code"
            language="javascript"
            style={gradientDark}
          >
            {quiz.code}
          </SyntaxHighlighter>
          <div className="options">
            {quiz.answers.map((answer, i) => (
              <button
                key={i}
                disabled={quiz.userSelectedAnswer != null}
                className={getOptionClassName(quiz, i)}
                onClick={() => selectAnswer(quiz.id, i)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Quiz
