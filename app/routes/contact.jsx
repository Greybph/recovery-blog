import ContactForm from "../components/contact/ContactForm"
import saveMessage from '~/utils/saveMessage.server'
import { useActionData } from "remix"
import {useEffect} from 'react'
import heroAnimation from "~/utils/heroAnimation"

export async function action({request}) {
  const formData = await request.formData()
  let values = Object.fromEntries(formData)
  return saveMessage(values)
}

export const meta = () => {
  return {
    title: "Recovery Ocean Contact Page",
    description: "Use this page to send a message to Eric Anderson, creator of Recovery Ocean.",
  }

}

function ContactPage() {
  const action = useActionData()

  useEffect(() => {
    heroAnimation('#contact-hero-titles')
  }, [])

  return (
    <main className='flex flex-col px-4 pt-24 pb-32 lg:flex-row md:pb-48 lg:justify-between md:pt-40 lg:pt-36 md:px-12 lg:px-28 xl:px-32 font-mont'>
      <div id="contact-hero-titles" className="opacity-0 md:mb-14 lg:mr-8 lg:mb-0">
        <span className='block text-center md:text-left font-bold text-3xl lg:text-[3.5rem] xl:text-[4.5rem] md:text-[3rem] md:mb-4'>Contact</span>
        <span className="block mt-6 font-medium tracking-tight text-center md:text-left md:text-3xl">Let's chat!</span>        
      </div>
      <ContactForm question={action?.question ? action?.question : null} />
    </main>
  )
}

export default ContactPage