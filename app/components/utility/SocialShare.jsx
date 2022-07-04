import {FaFacebookSquare, FaTwitter} from 'react-icons/fa'
import {useLocation} from 'remix'
import { useEffect } from 'react'

import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import {gsap} from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function SocialShare() {
  const path = useLocation().pathname
  const handleClick = () => window.open('https://twitter.com/share?url=https://www.recoveryocean.com' + path)

  useEffect(() => {
    window.innerWidth < 1028 && gsap.to('#share-container', {
      xPercent: -100,
      duration: 0.3,
      scrollTrigger: {
        trigger: '#post-image',
        toggleActions: "restart none none reverse",
        start: 'center top',
      }
    })
  }, [])


  return (
    <div id="share-container" className='fixed right-0 z-10 grid grid-cols-1 translate-x-full rounded-l-md lg:rounded-l-none lg:rounded-r-md lg:rounded-md lg:translate-x-0 top-20 lg:right-auto lg:top-1/2 lg:left-0 lg:-translate-y-1/2 bg-neutral-200'>
    <button className='p-2 duration-100 rounded-l-md lg:rounded-l-none lg:rounded-r-md bg-netural-200 lg:pt-2 lg:px-2 lg:pb-2 hover:bg-neutral-300'>
      <a aria-label='Share post on facebook' href={`https://www.facebook.com/sharer/sharer.php?u=http://recoveryocean.com${path}`} target="_blank" rel="noreferrer">
        <FaFacebookSquare className='text-2xl md:text-3xl lg:text-4xl text-facebook'/>
      </a>
    </button>
    
    <button className='p-2 duration-100 rounded-l-md lg:rounded-l-none lg:rounded-r-md bg-neutral-200 hover:bg-neutral-300 lg:pt-2 lg:pb-2 lg:px-2'>
      <FaTwitter aria-label='Share post on Twitter' className="text-2xl cursor-pointer md:text-3xl lg:text-4xl text-twitter" onClick={handleClick} />
    </button>
  </div>  
  )
}

export default SocialShare