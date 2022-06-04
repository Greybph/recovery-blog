import mongoose from 'mongoose'

const QuestionsSchema = mongoose.Schema({
  email: String,
  question: String,
}, {timestamps: true})

const Questions = mongoose.models.Questions || mongoose.model("Questions", QuestionsSchema)

export default Questions