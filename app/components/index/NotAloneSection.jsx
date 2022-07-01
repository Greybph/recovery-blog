import { useEffect, useState } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { Form, useTransition } from 'remix'

gsap.registerPlugin(ScrollTrigger)

function NotAloneSection() {
  const transition = useTransition()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    let timeout
    if (transition?.location?.pathname === '/posts') {
      timeout = setTimeout(() => setShowLoading(true), 300)
    }
    return () => clearTimeout(timeout)
  }, [transition.location])

  useEffect(() => {
    let wide = window.innerWidth >= 768
    let tablet = window.innerWidth <= 900

    gsap.from('#not-alone-section-container', {
      y: wide ? 300 : 100,
      scrollTrigger: {
        trigger: '#not-alone-section-container',
        scrub: tablet ? 1 :2,
        start: 'top bottom',
        end: wide ? 'top 50%' : 'top 70%'
      }
    })
    
    gsap.from('#not-alone-section-text', {
      x: 50,
      scrollTrigger: {
        trigger: '#not-alone-section-text',
        scrub: tablet ? 1 :2,
        start: 'top bottom',
        end: wide ? 'top 50%' : 'top 75%'
      }
    })

    gsap.to('#not-alone-section-line', {
      height: '200px',
      scrollTrigger: {
        trigger: '#not-alone-section-line',
        scrub: 1,
        start: 'top bottom',
        end: 'top 30%',
      }
    })
  }, [])

  return (
    <section id="not-alone-section-container" className="relative flex flex-col justify-between px-4 py-8 bg-black md:px-14 md:py-20 lg:items-center lg:flex-row lg:p-0 lg:bg-white">
      <div id="not-alone-section-text" className="text-white bg-black rounded-md lg:w-3/5 lg:px-16 lg:py-44 xl:px-40 xl:py-60 font-mont">
        <span className='block mb-1 text-2xl font-bold md:text-4xl md:mb-2 lg:mb-2 lg:text-5xl xl:text-6xl whitespace-nowrap'>You're Not Alone</span>
        <p className="mb-8 text-xs font-medium leading-6 max-w-none sm:max-w-md md:max-w-xl md:leading-10 lg:leading-6 md:text-xl lg:text-base xl:text-base md:mb-14 lg:mb-0 lg:max-w-lg xl:leading-7">Drug addiction affects millions of families around the world. This disease doesn't discriminate; anybody can become dependent on drugs.</p>
        <Form action='/posts' method="post">
          <input type="hidden" name="_action" value="category" />
          <input type="hidden" name="category" value="addiction" />
          <button type="submit" className={`${showLoading ? "animate-bounce" : ''} py-2 mt-4 lg:mt-10 text-lg font-medium text-white duration-300 bg-black border-4 border-white rounded-md w-44 md:w-52 lg:w-60 md:py-4 md:text-2xl hover:bg-white hover:text-black`}
          >
            {showLoading ? 'Loading...' : "Learn more"}
        </button>
        </Form>
      </div>
      
      <div id="not-alone-section-image" className="pt-8 mx-auto lg:w-2/5 lg:absolute right-10 lg:pt-0">
        <img 
          className="rounded-md"
          src='https://res.cloudinary.com/recovery-ocean/image/upload/c_scale,w_550/f_auto,q_auto/v1656706370/man-in-destroyed-building_gjr45h.jpg' alt="Man with a hood up standing in a destroyed house with rubble all around him." />
        <span className='hidden'>Photo by micha brandli</span>
      </div>
      <div id="not-alone-section-line" className='absolute hidden h-0 border-l border-white xl:block xl:left-20 xl:top-44'></div>
    </section>
  )
}

export default NotAloneSection