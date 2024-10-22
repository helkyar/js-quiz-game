export type Questions = Question[]

export interface Question {
  id: number
  question: string
  code: string
  answers: string[]
  correctAnswer: number
  isCorrectUserAnswer?: boolean
  userSelectedAnswer?: number
}
