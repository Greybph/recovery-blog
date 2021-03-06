import ContactForm from "../components/contact/ContactForm"
import saveMessage from '~/utils/saveMessage.server'
import {useEffect} from 'react'
import heroAnimation from "~/utils/heroAnimation"

export async function action({request}) {
  const formData = await request.formData()
  let recaptcha = formData.get('g-recaptcha-response')
  let response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_API_KEY}&response=${recaptcha}`, {method: 'POST'})
  let data = await response.json()
  
  if (data.success) {
    let values = Object.fromEntries(formData)
    return saveMessage(values)
  } else {
    return {needsVerification: true}
  }
}

export const links = () => {
  return [
    {rel: "canonical", href: 'https://www.recoveryocean.com/contact'}
  ]
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
        <span className="hidden mt-6 text-3xl font-medium tracking-tight text-left md:block">Let's chat!</span>

        <div className="mt-6 space-y-2 text-sm font-medium md:text-base md:mt-8">
          <p className="text-center md:text-left">Use this form to send me a message</p>      
          <p className="text-center md:text-left">Or contact me on <a href="https://www.facebook.com/RecoveryOcean"    
              target="_blank" rel="noreferrer" className="font-bold text-black underline duration-100 hover:text-slate-900">
              Facebook
            </a>
          </p>  
        </div>
      </div>
      <ContactForm />
    </main>
  )
}

export default ContactPage