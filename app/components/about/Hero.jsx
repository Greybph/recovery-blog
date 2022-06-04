import {useEffect} from 'react'
import heroAnimation from '~/utils/heroAnimation'

function Hero() {
  useEffect(() => {
    heroAnimation('#about-hero-titles', '#about-hero-paragraph')
  }, [])

  return (
    <section 
      className='px-4 py-24 md:py-64 md:pt-40 lg:pt-36 md:px-10 lg:px-28 xl:px-32 font-mont h-[85vh] lg:h-auto flex flex-col justify-center md:block'
    >
      <div id="about-hero-titles" className='opacity-0'>
        <span className='block text-center md:text-left font-bold text-3xl lg:text-[4.5rem] md:text-[3rem]'>About</span>
        <h1 className="mt-2 text-lg font-medium tracking-tight text-center lg:mb-1 md:mt-6 md:text-left md:text-3xl">Recovery Ocean by Eric Anderson</h1>
      </div>
      <p id="about-hero-paragraph" className='pt-5 ml-1 text-sm font-medium leading-7 text-center opacity-0 md:max-w-2xl md:leading-10 md:text-xl md:text-left'>Hey guys, I'm Eric. I am a 28-year-old from the Pacific North West. In 2018 I walked into a treatment center for the ninth time. Thirty-five days later, I walked out and have managed to stay clean ever since.</p>
    </section>
  )
}

export default Hero