import Questions from '~/models/Questions.server'

export default async function submitQuestion(values) {
  const {email, question} = values
  await Questions.create({email, question})
  return {sent: true}
}