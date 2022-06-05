import Messages from '~/models/Messages.server'

export default function saveMessage(values) {
  if (values.birthdate) return null

  Messages.create({
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message
  })
  return {sent: true}
}