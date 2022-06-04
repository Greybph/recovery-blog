import {Form, useTransition, useActionData} from 'remix'
import { useEffect } from 'react'
import FlashMessage from '~/components/utility/FlashMessage'

function ContactForm() {
  const transition = useTransition()
  const action = useActionData()

  useEffect(() => {
    const inputs = document.querySelectorAll('input')
    if (action?.sent) {
      inputs.forEach(input => input.value = "")
      document.querySelector('textarea').value = ""
    }
  }, [action])

  return (
    <Form method='post' className="flex flex-col justify-center p-8 mt-6 space-y-2 bg-white border rounded-md shadow lg:px-10 lg:pt-12 lg:pb-8 md:space-y-8 md:p-14 font-mont md:mt-0">
      <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
        <input id="name" required type="text" name="name" placeholder="Your name" 
          className="w-full p-3 text-sm border-2 border-gray-200 rounded-md shadow-inner md:text-lg outline-slate-400" />
        <input name="birthdate" type="date" className='hidden' />
        <input id="email" required type="email" name="email" placeholder="Your email" 
          className="w-full p-3 text-sm border-2 rounded-md shadow-inner md:text-lg outline-slate-400" />
      </div>
      <input id="subject" type="text" name="subject" placeholder="Subject" 
        className="p-3 text-sm border-2 rounded-md shadow-inner md:text-lg outline-slate-400" />
      <textarea 
        id="message" required name="message" placeholder="Your message" cols="50"
        rows="6"
        className="block p-3 text-sm border-2 rounded-md shadow-inner resize-none md:text-lg outline-slate-400"></textarea>
      
      {action?.sent && 
        <FlashMessage duration={5000}>
          <span className='block font-bold text-center text-slate-900'>Message Sent!</span>
        </FlashMessage>
      }

      <button disabled={action?.sent || transition.submission} type="submit" className="py-3 font-medium text-white duration-300 rounded-md md:py-4 md:text-xl bg-slate-900 hover:bg-opacity-90">
        {transition.submission ? "Sending..." : "Send Message"}
      </button>
    </Form>
  )
}

export default ContactForm
