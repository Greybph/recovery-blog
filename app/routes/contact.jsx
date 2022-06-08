import ContactForm from "../components/contact/ContactForm"
import saveMessage from '~/utils/saveMessage.server'
import {useEffect} from 'react'
import heroAnimation from "~/utils/heroAnimation"

export async function action({request}) {
  const formData = await request.formData()
  let recaptcha = formData.get('g-recaptcha-response')
  let response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6LfrqVEgAAAAAFG3-abDpUbQnBE6V8Xhlop-sHhQ&response=${recaptcha}`, {method: 'POST'})
  let data = await response.json()
  
  if (data.success) {
    let values = Object.fromEntries(formData)
    return saveMessage(values)
  } else {
    return {needsVerification: true}
  }
}

export const meta = () => {
  return {
    title: "Recovery Ocean Contact Page",
    description: "Use this page to send a message to Eric Anderson, creator of Recovery Ocean.",
    'og:description': "Use this page to send a message to Eric Anderson, creator of Recovery Ocean.",
    'og:image': "https://res.cloudinary.com/recovery-ocean/image/upload/v1654557644/recovery_ocean_home_image_ykkae9.png",
    'og:url': 'https://www.recoveryocean.com/contact'
  }

}

function ContactPage() {

  useEffect(() => {
    heroAnimation('#contact-hero-titles')
  }, [])

  return (
    <main className='flex flex-col px-4 pt-24 pb-32 lg:flex-row md:pb-48 lg:justify-between md:pt-40 lg:pt-36 md:px-12 lg:px-28 xl:px-32 font-mont'>
      <div id="contact-hero-titles" className="opacity-0 md:mb-14 lg:mr-8 lg:mb-0">
        <span className='block text-center md:text-left font-bold text-3xl lg:text-[3.5rem] xl:text-[4.5rem] md:text-[3rem] md:mb-4'>Contact</span>
        <span className="block mt-6 font-medium tracking-tight text-center md:text-left md:text-3xl">Let's chat!</span>        
      </div>
      <ContactForm />
    </main>
  )
}

export default ContactPage