import {useEffect, useState} from 'react'
import {CgChevronUp} from 'react-icons/cg'
import {MdOutlineAutoStories} from 'react-icons/md'
import {gsap} from 'gsap'


function ScrollNav() {
  const [showScrollNav, setShowScrollNav] = useState(false)
  
  const handleScroll = () => 
    window.scrollY > 136 ?
      setShowScrollNav(true)
    :
      setShowScrollNav(false)
  
  const handleClick = () => window.scrollTo({top: 0, behavior: 'smooth'})

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  useEffect(() => {
    if (showScrollNav) {
      gsap.to('#scroll-nav', {zIndex: 50})
      gsap.to('#scroll-nav', {opacity: 1, duration: .5})
      gsap.to('#scroll-top-btn', {opacity: 1, duration: .5})
    } else {
      gsap.to('#scroll-nav', {opacity: 0, duration: .5})
      gsap.to('#scroll-nav', {zIndex: 0})
    }
  }, [showScrollNav])
  

    return (
      <>
      <div id="scroll-nav" className="fixed top-0 left-0 items-center justify-between hidden w-full px-4 py-2 bg-white shadow opacity-0 md:px-12 lg:px-28 md:flex font-mont">
        <span className="text-2xl">LOGO</span>
        <ul className='flex items-center space-x-16'>
          <li>topics</li>
          <li>blog</li>
          <li>resources</li>
          <li>
            <button className='flex items-center justify-between px-6 py-2 font-medium duration-300 border-2 border-black'>
              stories
              <MdOutlineAutoStories className='ml-4 text-xl' />
            </button>
          </li>
        </ul>
      </div>

      <button
        id="scroll-top-btn"
        onClick={handleClick} 
        className='fixed z-50 flex items-center justify-center w-10 h-10 bg-white rounded shadow opacity-0 bottom-6 right-6'>
        <CgChevronUp className='text-xl' />
      </button>
      </>
    )
  } 


export default ScrollNav