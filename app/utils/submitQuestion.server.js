import Questions from '~/models/Questions.server'
import mongoose from './mongoose.server'

export default async function submitQuestion(values) {
  await mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  const {email, question} = values
  Questions.create({email, question})
  return {sent: true}
}