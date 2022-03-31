import React from 'react'
import { Form } from 'remix'
import emailIcon from '~/assets/emailIcon.svg'
import {useState} from 'react'

function Hero() {
  const [showInput, setShowInput] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    let topicInput = document.getElementById('topic-input')
    if (topicInput.value) {
      setShowInput(true)
    } else {
      return null
    }
  }

  return (
    <section className='flex flex-col items-center pt-32 pb-28 bg-slate-50 font-mont'>
      <h1 className='text-2xl font-bold tracking-tighter md:text-3xl'>Ask someone who has been where you are</h1>
    
      <div className='flex items-center py-8'>
        <img
          className='w-20 mr-6' 
          src={emailIcon} alt="Drawing of an envelope" />
        <p className='max-w-[250px] text-sm font-medium tracking-tighter'>Submit a topic and get a response from someone who understands your situation.</p>
      </div>

      <Form method='post' data-netlify='true' name="topic-submissions" className='flex flex-col items-center justify-center w-3/4 space-y-2 tracking-tighter md:w-2/6 '>
        <div className='flex w-full'>
          <input
            id="topic-input"
            className='h-full block w-full px-3 py-[13px] text-sm border placeholder:font-medium rounded outline-green-400 placeholder:text-neutral-400 border-neutral-300' 
            type="text" name="topic" placeholder='Topic' />
            <button 
              onClick={handleClick}
              className='-ml-2 text-sm font-medium text-white bg-green-400 rounded w-36 border-emerald-300'
            >
              Done
            </button>
        </div>
         
        {showInput &&
          <div className='flex w-full'>
              <input
              className='h-full block w-full px-3 py-[13px] text-sm border placeholder:font-medium rounded outline-green-400 placeholder:text-neutral-400 border-neutral-300' 
              type="email" name="email" placeholder='Email Address' />
              <button 
                type="submit"
                className='-ml-2 text-sm font-medium text-white bg-green-400 rounded w-36 border-emerald-300'
              >
                Submit
              </button>
          </div>
        } 

      
        
      </Form>
    </section>
  )
}

export default Hero