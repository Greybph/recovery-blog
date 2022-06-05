import {useTransition, Form , useActionData} from 'remix'
import {useState, useEffect, useRef} from 'react'
import FlashMessage from '~/components/utility/FlashMessage'



function AskMeSection() {
  const transition= useTransition()
  const action = useActionData()
  const emailInputRef = useRef()
  const [showInput, setShowInput] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setShowInput(true)
    let timeout = setTimeout(() => emailInputRef.current.focus(), 100)
    return () => clearTimeout(timeout)
  }

  useEffect(() => {
    const inputs = document.querySelectorAll('input')
    if (action?.sent) {
      inputs.forEach(input => input.value = "")
    }
  }, [action])

  return (
    <section className={`${showInput ? 'lg:items-center' : 'lg:items-end'} flex flex-col px-4 py-10 md:py-16 md:space-y-4 lg:justify-between lg:flex-row lg:py-24 md:px-10 lg:px-28 xl:px-32 font-mont bg-slate-100`}>
      <div className='lg:w-2/5'>
        <span className='block text-2xl font-bold text-center text-slate-900 md:text-4xl lg:text-5xl lg:whitespace-nowrap'>Ask an Addict</span>
        <p className='mt-2 text-sm font-medium leading-7 text-center text-slate-600 md:leading-10 md:text-2xl '>Have questions about drug addiction or recovery?</p>
      </div>
      <Form method='post' className='flex flex-col w-full space-y-4 lg:w-2/5'>
        <input type="hidden" name="_action" value="question" />
        <input 
          type="text" required name="question" placeholder='Your question'
          className="p-3 text-sm border-2 rounded-md shadow-inner md:p-4 md:text-lg outline-slate-400"/>
        
        {showInput && !action?.sent ? (
          <input 
          ref={emailInputRef}
          type="email" required name="email" placeholder='Your email'
          className="p-3 text-sm border-2 rounded-md shadow-inner md:p-4 md:text-lg outline-slate-400"/>
        ) : ""}

        {action?.sent && 
          <FlashMessage duration={5000}>
            <span className='block font-bold text-center text-slate-900'>Question Sent!</span>
          </FlashMessage>
        }

        <button
          disabled={action?.sent || transition.submission} 
          type={showInput ? "submit" : null}
          className='py-3 font-medium text-white duration-300 rounded-md md:py-4 md:text-xl bg-slate-900 hover:bg-opacity-90'
          onClick={showInput ? null : handleClick}
        >
          {transition.submission ? "Sending..." : 
            showInput ? "Ask" : "Done"
          }
        </button>
      </Form>
    </section>
  )
}

export default AskMeSection