import {useEffect, useState} from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { TextPlugin } from 'gsap/dist/TextPlugin'
import {BsSun} from 'react-icons/bs'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

function Animation() {
  const [playAnim, setPlayAnim] = useState(false)
  
  useEffect(() => {
    if (playAnim) {
      const tl = gsap.timeline()
      
      tl.to('#reveal', {
        height: '250vh',
        duration: 2,
        ease: 'sine.in'
      })
      
      tl.to('#dark', {opacity: 0, duration: 0})
      tl.to('#dark', {display: 'none', duration: 0})
      tl.to('#reveal', {display: 'none', duration: 0})
      tl.to('#hero-text', {text: "Recovery is possible", duration: 2, delay: .5})
      tl.to('#hero-text', {opacity: 0, duration: 1, delay: 2})
      tl.to('#anim-container', {display: 'none',})
    }
    
  }, [playAnim])

  return (
    <div id="anim-container" className='flex items-center justify-center w-screen h-screen font-mont'>
      <div className='absolute my-auto -translate-y-1/2 bg-white top-1/2'>
        <span id="hero-text" className='block text-4xl font-bold text-center md:text-6xl lg:text-7xl asbolute'></span>
      </div>   
      
      <div id="dark" className="fixed top-0 flex items-center justify-center w-screen h-screen text-white bg-black ">
        <span className='px-4 text-4xl font-medium leading-relaxed tracking-tight text-center md:text-5xl lg:text-6xl'>
          No matter how dark things look
        </span>
        <div 
          onClick={() => setPlayAnim(true)} 
          className='absolute flex flex-col items-center justify-center py-2 cursor-pointer bottom-10'
        >
          <BsSun
            className='text-5xl text-yellow-300 animate-bounce bottom-20' 
          />
          <span className='text-xs text-white whitespace-nowrap'>Click to enter</span>
        </div>
      </div>
      
      <div id='reveal' className='absolute top-0 bottom-0 z-10 h-0 my-auto bg-white bg-cover rounded-full aspect-square'></div>
    </div>
  )
}

export default Animation