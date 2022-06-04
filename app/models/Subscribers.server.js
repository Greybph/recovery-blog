import mongoose from 'mongoose'

const SubscribersSchema = mongoose.Schema({
  email: String,
  post: String
}, {timestamps: true})

const Subscribers = mongoose.models.Subscribers || mongoose.model("Subscribers", SubscribersSchema)

export default Subscribers