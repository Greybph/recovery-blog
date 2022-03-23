import React from 'react'
import { Form } from 'remix'
import emailIcon from '~/assets/emailIcon.svg'

function Hero() {
  return (
    <section className='flex flex-col items-center pt-32 pb-28 bg-slate-50 font-mont'>
      <h1 className='text-2xl font-bold tracking-tighter md:text-3xl'>Drug Addiction and Recovery Support</h1>
    
      <div className='flex items-center py-8'>
        <img
          className='w-20 mr-6' 
          src={emailIcon} alt="Drawing of an envelope" />
        <p className='max-w-[250px] text-sm font-medium tracking-tighter'>Join our community. For anyone who has been impacted by addiction</p>
      </div>

      <Form method='post' className='flex flex-col items-center justify-center w-3/4 tracking-tighter md:w-2/6 md:flex-row'>
        <input
          className='h-full w-full px-3 py-[13px] text-sm border placeholder:font-medium rounded outline-green-400 placeholder:text-neutral-400 border-neutral-300' 
          type="email" name="email" placeholder='Email Address' />
          <button 
            type="submit"
            className='h-full w-full md:w-auto border-t md:mt-0 mt-2 border-emerald-300 px-6 py-[12px] md:-ml-2 font-medium text-white bg-green-400 rounded text-sm'
          >
            Subscribe
          </button>
      </Form>
    </section>
  )
}

export default Hero