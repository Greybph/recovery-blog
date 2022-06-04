import { useEffect } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function RecoveryTextSection() {

    useEffect(() => {
      let wide = window.innerWidth >= 768

      gsap.from('#recovery-text-section-text', {
        y:50,
        opacity: 0,
        scrollTrigger: {
          trigger: '#recovery-text-section-text',
          scrub: 2,
          start: wide ? 'top 90%' : 'top bottom',
          end: 'top 70%'
        }
      })
      
      gsap.from('#recovery-text-section-square', {
        y: wide ? 200 : 100,
        scrollTrigger: {
          trigger: '#recovery-text-section-square',
          scrub: 2,
          start: wide ? 'top 90%' : 'top bottom',
          end: wide ? 'top 30%' : 'top 70%',
        }
      })
    }, [])

  return (
    <section id="recovery-text-section-container" className="py-32 md:pt-60 md:pb-52 lg:py-60 font-mont">
      <div id="recovery-text-section-square" className="py-6 text-2xl font-medium rounded-md md:text-4xl lg:text-5xl ">
        <span id="recovery-text-section-text" className="block px-4 text-center">Recovery picks up the pieces</span>
      </div>
    </section>
  )
}

export default RecoveryTextSection