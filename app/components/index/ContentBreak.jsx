import {useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function ContentBreak() {

  useEffect(() => {

    let bounding = document.getElementById('content-break-container')
      .getBoundingClientRect()

    bounding.bottom - 50 > window.innerHeight &&
      gsap.from('#content-break', {
        opacity: 0,
        scrollTrigger: {
          trigger: '#content-break-container',
          scrub: true,
          start: 'top 80%',
          end: 'bottom 70%',
          once: true
        }
      })
    
  }, [])

  return (
    <section id="content-break" className="flex justify-center w-full py-6 text-white bg-gradient-to-r from-sky-600 via-sky-600 to-sky-500 font-mont">
      <div id="content-break-container" className='flex flex-col items-center'>
        <span className="block mb-1 text-lg font-medium md:text-2xl">Recovery and Addiction insight</span>
        <span className="block px-6 mb-4 text-xs text-center md:text-sm">Stories, advice, and lessons learned from those who have lived it</span>
        <button className="px-3 py-1 font-medium border-2 border-white rounded hover:bg-white hover:bg-opacity-5 ">
          Browse Topics
        </button>
      </div>
    </section>
  )
}

export default ContentBreak