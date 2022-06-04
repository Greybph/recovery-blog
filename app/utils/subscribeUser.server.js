import Subscribers from '~/models/Subscribers.server'

export default async function subscribe(values) {
  let exists = await Subscribers.find({email: values.email})

  if (!exists.length) {
    await Subscribers.create({email: values.email, post: values.post})
  }
  return {subscribed: true}
}