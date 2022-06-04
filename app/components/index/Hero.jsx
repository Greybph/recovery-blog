import heroBg from '~/assets/indexHeroBg.jpg'
import {useEffect} from 'react'
import heroAnimation from '~/utils/heroAnimation'

function Hero() {  
 useEffect(() => {
  heroAnimation('#index-hero-titles', '#index-hero-paragraph')
 }, [])

  return (
    <section style={{backgroundColor: '#f1f2f4', backgroundImage: `url('${heroBg}')`}} className="mb-20 md:mb-0 flex-col flex justify-center md:block px-4 md:bg-blend-normal bg-cover md:pt-40 lg:pt-36 md:bg-right h-[85vh] xs:h-[65vh] md:h-[85vh] md:px-10 lg:px-28 xl:px-32 font-mont bg-fixed lg:bg-local">
      <span className='hidden'>Image by Jean Gerber on Unsplash</span>
      <div id="index-hero-titles" className='opacity-0'>
        <span className='block text-center md:text-left font-bold text-3xl lg:text-[4.5rem] md:text-[3rem]'>Recovery Ocean</span>
        <h1 className="mt-2 text-lg font-medium tracking-tight text-center lg:mb-1 md:mt-6 md:text-left md:text-3xl">Drug Addiction & Recovery Blog</h1>
      </div>
      <p id="index-hero-paragraph" className='pt-5 ml-1 text-sm font-medium leading-7 text-center opacity-0 md:max-w-2xl md:leading-10 md:text-xl md:text-left'>Raw stories, advice, and lessons learned from drug addiction. Focused on helping addicts and their families better understand this disease.</p>
    </section>
  )
}

export default Hero