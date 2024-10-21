import { useQuestionsStore } from '../store/useQuestionsStore'
import { Question } from '../types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

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
                <SyntaxHighlighter
                  className="code"
                  language="javascript"
                  style={gradientDark}
                >
                  {question.code}
                </SyntaxHighlighter>
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
