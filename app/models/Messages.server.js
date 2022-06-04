import mongoose from 'mongoose'

const MessagesSchema = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
}, {timestamps: true})

const Messages = mongoose.models.Messages || mongoose.model("Messages", MessagesSchema)

export default Messages