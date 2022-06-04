import { useEffect, useState } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { Form, useTransition } from 'remix'

gsap.registerPlugin(ScrollTrigger)

function WeCanRecoverSection({image}) {
  const transition = useTransition()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    let timeout
    if (transition.submission) {
      timeout = setTimeout(() => setShowLoading(true), 200)
    }
    return () => clearTimeout(timeout)
  }, [transition.submission])

  useEffect(() => {
    let wide = window.innerWidth >= 768
    let tablet = window.innerWidth <= 900

    gsap.from('#we-can-recover-container', {
      y: wide ? 200 : 100,
      scrollTrigger: {
        trigger: '#we-can-recover-container',
        scrub: tablet ? 1 : 2,
        start: 'top bottom',
        end: wide ? 'top 50%' : 'top 70%'
      }
    })
    
    gsap.from('#we-can-recover-text', {
      x: wide ? 100 : 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '#we-can-recover-text',
        scrub: tablet ? 1 : 2,
        start: 'top bottom',
        end: wide ? 'top 50%' : 'top 75%'
      }
    })
    
    wide && gsap.from('#we-can-recover-image', {
      x: -100,
      y: 100,
      scrollTrigger: {
        trigger: '#we-can-recover-image',
        scrub: tablet ? 1 : 2,
        end: 'top 60%',   
        start: tablet && 'top bottom'     
      }
    })
  }, [])

  return (
    <section id="we-can-recover-container" className="relative flex flex-col justify-between px-4 py-8 mb-10 bg-slate-200 md:px-14 md:py-20 lg:items-center lg:flex-row lg:p-0 lg:bg-white md:mb-0 lg:mb-32">
      <div id="we-can-recover-text" className="text-slate-900 bg-slate-200 rounded-md lg:w-3/5 lg:px-16 lg:py-44 xl:px-40 xl:py-60 font-mont">
        <span className='block mb-1 text-2xl font-bold md:text-4xl md:mb-2 lg:mb-2 lg:text-5xl xl:text-6xl slate-900 whitespace-nowrap'>We Can Recover</span>
        <p className="mb-8 text-xs font-medium leading-6 max-w-none md:max-w-xl md:leading-10 lg:leading-6 md:text-xl lg:text-base xl:text-base md:mb-14 lg:mb-0 lg:max-w-lg xl:leading-7">No matter how dark things may seem for you or your loved one, recovery is possible. People do beat this disease and get their lives back.</p>
        <Form action='/posts' method='post'>
          <input type="hidden" name="_action" value='category' />
          <button type='submit' name="category" value="recovery" className={`${showLoading ? 'animate-bounce' : ''} py-2 mt-4 lg:mt-10 text-lg font-medium text-slate-900 duration-200 bg-slate-200 border-4 border-slate-900 rounded-md md:py-4 md:text-2xl w-44 md:w-56 lg:w-60 hover:bg-slate-900 hover:text-slate-200`}>
            {showLoading ? "Loading..." : "Find out how"}
          </button>
        </Form>
      </div>
      
      <div id="we-can-recover-image" className="pt-8 mx-auto lg:w-2/5 lg:absolute right-10 lg:pt-0">
        <img 
          className="rounded-md"
          src={image} alt="Man standing on a rock staring out over the ocean as the sun rises and starts a brand new day." />
        <span className='hidden'>Photo by joshua earle</span>
      </div>

    </section>
  )
}

export default WeCanRecoverSection