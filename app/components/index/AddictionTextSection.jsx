import { useEffect } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AddictionTextSection() {

    useEffect(() => {
      let wide = window.innerWidth >= 768

      gsap.from('#square-section-text', {
        y:50,
        opacity: 0,
        scrollTrigger: {
          trigger: '#square-section-text',
          scrub: 2,
          start: wide ? 'top 90%' : 'top bottom',
          end: 'top 70%',
        }
      })
      
      gsap.from('#square-section-square', {
        y: wide ? 200 : 100,
        scrollTrigger: {
          trigger: '#square-section-square',
          scrub: 2,
          start: wide ? 'top 90%' : 'top bottom',
          end: wide ? 'top 30%' : 'top 50%',
        }
      })
    }, [])

  return (
    <section id="square-section-container" className="pb-44 pt-14 md:py-52 lg:py-60 font-mont">
      <div id="square-section-square" className="py-6 text-2xl font-medium rounded-md md:text-4xl lg:text-5xl">
        <span id="square-section-text" className="block px-4 text-center">Drug addiction rips apart our lives.</span>
      </div>
    </section>
  )
}

export default AddictionTextSection