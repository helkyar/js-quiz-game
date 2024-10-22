import { create } from 'zustand'
import { Questions } from '../types'
import { getQuestions } from '../services/getQuestions'
import { devtools, persist } from 'zustand/middleware'
import confetti from 'canvas-confetti'

interface State {
  isLoading: boolean
  questions: Questions
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  error: string
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

export const useQuestionsStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        questions: [],
        currentQuestion: 0,
        isLoading: false,
        error: '',

        fetchQuestions: async (limit: number) => {
          try {
            const res = await getQuestions()
            //For better performance and reliability, consider using the Fisher-Yates shuffle algorithm.
            const questions = res
              .sort(() => Math.random() - 0.5)
              .slice(0, limit)

            set({ questions }, false, 'FETCH_QUESTIONS')
          } catch (error) {
            set({ error: 'Error fetching questions' })
          }
        },
        goNextQuestion: () => {
          const { currentQuestion, questions } = get()
          const nextQuestion = currentQuestion + 1
          if (nextQuestion === questions.length) return
          set({ currentQuestion: nextQuestion })
        },
        goPreviousQuestion: () => {
          const { currentQuestion } = get()
          const previousQuestion = currentQuestion - 1
          if (previousQuestion < 0) return
          set({ currentQuestion: previousQuestion })
        },
        selectAnswer: (questionId, answerIndex) => {
          const { questions } = get()
          // get the question info
          const newQuestions = structuredClone(questions)
          const questionIndex = newQuestions.findIndex(
            (question) => questionId === question.id
          )
          // check if is correct answer
          const isCorrectAnswer =
            answerIndex === newQuestions[questionIndex].correctAnswer
          if (isCorrectAnswer) confetti()
          // persist the data
          newQuestions[questionIndex] = {
            ...newQuestions[questionIndex],
            userSelectedAnswer: answerIndex,
            isCorrectUserAnswer: isCorrectAnswer,
          }
          set({ questions: newQuestions }, false, 'SELECT_ANSWER')
        },
        reset: () => set({ questions: [], currentQuestion: 0 }),
      }),
      { name: 'questions-store' }
    )
  )
)
