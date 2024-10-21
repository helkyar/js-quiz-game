import { Questions } from '../types'

export async function getQuestions() {
  const res = await fetch('http://localhost:5173/data.json')
  const json = await res.json()
  return json as Questions
}
