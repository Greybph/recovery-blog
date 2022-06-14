import {useEffect, useState, useCallback} from 'react'
import {gsap} from 'gsap'
import { Link, useTransition } from 'remix'
import logo from '~/assets/logo.svg'

function ScrollNav() {
  const transition = useTransition()
  const [showScrollNav, setShowScrollNav] = useState(false)
  let old = 0
  let newV = 0
  
  const handleScroll = useCallback(() => {
    if (window.innerWidth < 768) return null
    let scrollingUp
    newV = window.scrollY
    if (old > newV) scrollingUp = true
    old = newV

    window.scrollY > 136 && scrollingUp ?
      setShowScrollNav(true) :
      setShowScrollNav(false)
  }, [])
  
  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[handleScroll])


  useEffect(() => {
    if (showScrollNav) {
      gsap.to('#scroll-nav', {zIndex: 50})
      gsap.to('#scroll-nav', {opacity: 1, duration: .3})
    } else {
      gsap.to('#scroll-nav', {opacity: 0, duration: .3})
      gsap.to('#scroll-nav', {zIndex: -10})
    }
  }, [showScrollNav])
  
    return (
      <div id="scroll-nav" className={`${showScrollNav ?'z-50' : '-z-50'} fixed top-0 left-0 items-center justify-between hidden w-full px-4 py-4 bg-white shadow opacity-0 md:px-12 lg:px-28 md:flex font-mont`}>
        <Link to='/'>
          <img src={logo} alt="recovery ocean text logo"  className="w-16"/>
        </Link>
        <ul className='flex items-center space-x-16 text-lg font-medium'>
          <li className='relative'>
            <Link className={`${transition?.location?.pathname === '/posts' ? 'animate-pulse' : ''} font-medium text-lg after:content-[''] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left`} to='/posts'>Blog</Link>
          </li>
          <li className='relative'>
            <Link className={`${transition?.location?.pathname === '/about' ? 'animate-pulse' : ''} font-medium text-lg after:content-[''] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left`}  to='/about'>About</Link>
          </li>
          <li className='relative'>
            <Link className={`${transition?.location?.pathname === '/contact' ? 'animate-pulse' : ''} font-medium text-lg after:content-[''] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left`}  to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
  } 


export default ScrollNav