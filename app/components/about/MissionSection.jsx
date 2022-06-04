import { useEffect } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {Link, Form} from 'remix'
gsap.registerPlugin(ScrollTrigger)


function MissionSection() {

  useEffect(() => {
    let wide = window.innerWidth >= 1024

    gsap.from('#mission-block-1', {
      x: wide ? -100 : -50,
      opacity: wide ? 1 : 0,
      y: wide ? 100 : 0,
      scrollTrigger: {
        trigger: '#mission-block-1',
        scrub: wide ? 1 : false,
        start: wide ? 'top bottom' : 'top 90%',
        end: wide ? 'top 55%' : 'top 75%',
      }
    })

    gsap.from('#mission-block-2', {
      x: wide ? 100 : 50,
      y: wide ? 100 : 0,
      opacity: wide ? 1 : 0,
      scrollTrigger: {
        trigger: '#mission-block-2',
        scrub: wide ? 1 : false,
        start: wide ? 'top bottom' : 'top 90%',
        end: wide ? 'top 55%' : 'top 75%',
      }
    })
  }, [])

  return (
    <section className="px-4 py-32 overflow-x-hidden md:py-44 md:px-10 lg:px-28 xl:px-32 font-mont bg-slate-100">
      <span className='block text-2xl font-bold text-center md:text-4xl lg:text-5xl'>Mission</span>
      <p className="py-4 mx-auto font-medium leading-7 text-center text-slate-600 md:px-20 md:text-2xl md:leading-10">Bring hope and understanding to addicts and their families by sharing my experiences in drug addiction and recovery.</p>
      <div className="flex flex-col items-center justify-center mt-4 space-x-0 space-y-6 lg:justify-between lg:space-y-0 lg:space-x-14 lg:flex-row md:mt-10">
        <Form action='/posts' method="post" id="mission-block-1" className="lg:w-1/2 lg:h-[25rem] px-10 py-10 bg-white shadow rounded-md flex flex-col justify-center ">
          <input type="hidden" name="_action" value="category" />
          <span className="block pb-6 text-xl font-bold text-center md:text-3xl lg:text-4xl">Addicts</span>
          <p className="text-sm font-medium leading-7 text-center md:text-xl md:leading-10">There is still hope for you to beat this disease. Check out my <button type="submit" name="category" value="recovery" className='font-bold text-slate-700 hover:text-slate-500 duration:300'>articles on recovery</button> to see how I was able to stop using and stay off of drugs.</p>
        </Form>
        
        <Form action='/posts' method="post" id="mission-block-2" className="lg:w-1/2 lg:h-[25rem] px-10 py-10 bg-white shadow rounded-md flex flex-col justify-center ">
          <input type="hidden" name="_action" value="category" />
          <span className="block pb-6 text-xl font-bold text-center md:text-3xl lg:text-4xl">Families</span>
          <p className="text-sm font-medium leading-7 text-center md:text-xl md:leading-10">Before you can help your loved one you need to understand them. Check out my <button type="submit" name="category" value="addiction" className='font-bold text-slate-700 hover:text-slate-500 duration:300'>addiction articles</button> for insight into what they are going through.</p>
        </Form>
      </div>
    </section>
  )
}

export default MissionSection