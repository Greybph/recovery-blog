import {Link, useTransition, useLocation} from 'remix'
import {FiMenu} from 'react-icons/fi'
import {useState, useEffect, useCallback} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import MobileNavList from './MobileNavList'
import {gsap} from 'gsap'
import logo from '~/assets/logo.svg'
import {CgChevronUp} from 'react-icons/cg'

function NavBar() {
  const path = useLocation().pathname
  const transition = useTransition()
  const [showNav, setShowNav] = useState(false)
  const [toggleIcon, setToggleIcon] = useState('menu')
  const [firstRender, setFirstRender] = useState(true)
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  const handleClick = () => window.scrollTo({top: 0, behavior: 'smooth'})

  const handleResize = () => window.innerWidth > 768 ? setShowNav(false) : null

  const handleScroll = () => window.scrollY > 164 ? 
    setShowScrollBtn(true) : setShowScrollBtn(false)

  const handleOutsideClick = useCallback((e) => {
    if (e.target.parentNode.id !== "mobile-nav-container") {
      setShowNav(false)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])   

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (showNav === true) {
      document.addEventListener('click', handleOutsideClick)
    }
  }, [showNav, handleOutsideClick])

  useEffect(() => {
    if (!firstRender) {
      let tl = gsap.timeline()
      tl.to("#nav-toggle", {
        scale: 0, duration: 0.3
      })
      tl.to("#nav-toggle", {
        scale: 1, duration: 0.3
      })
      showNav ?
        setTimeout(() => setToggleIcon("close"), 300) 
      :   
        setTimeout(() => setToggleIcon("menu"), 300) 
      }

    if (showNav) {
      let navItems = gsap.utils.toArray('.nav-item')
      gsap.from(navItems, {opacity: 0, scale: 0, stagger: .1, duration: .3, delay: 0.35})
    } 

  }, [showNav])

  useEffect(() => {
    setTimeout(() => setFirstRender(false), 100)
  }, [])

  return (
    <>
    <nav className={`${showNav ? 'fixed' : 'absolute'} top-0 z-10 flex items-center justify-between w-full px-4 py-6 font-medium font-mont md:px-12 lg:px-28 xl:px-32`}>
      <Link to='/' onClick={() => setShowNav(false)} className={`${transition?.location?.pathname === "/" ? 'animate-pulse' : ''} z-10 text-2xl`}>
        <img src={logo} alt='recovery ocean text logo' className="w-10 md:w-16"/>
      </Link>
      <ul className='hidden space-x-16 lg:flex'>
        <li className='relative'>
          <Link className={`${transition?.location?.pathname === "/blog" ? 'animate-pulse' : ''} font-medium text-lg after:content-[''] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left ${path === '/posts' ? 'after:scale-x-100' : ''}`} to='/posts'>Blog</Link>
        </li>
        <li className='relative'>
          <Link className={`${transition?.location?.pathname === "/about" ? 'animate-pulse' : ''} font-medium text-lg after:content-[''] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left ${path === '/about' ? 'after:scale-x-100' : ''}`}  to='/about'>About</Link>
        </li>
        <li className='relative'>
          <Link className={`${transition?.location?.pathname === "/contact" ? 'animate-pulse' : ''} font-medium text-lg after:content-[''] after:bg-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-200 after:origin-bottom-left ${path === '/contact' ? 'after:scale-x-100' : ''}`} to='/contact'>Contact</Link>
        </li>
      </ul>

      <button
        aria-label={showNav ? "Close Site Navigation" : "Open Site Navigation"}
        id="nav-toggle"
        className='absolute z-[200] p-2 bg-white rounded shadow outline-none right-4 top-4 md:right-6 md:top-6 lg:hidden'
        onClick={() => setShowNav(!showNav)}
      >
        {toggleIcon === 'close' ? 
          <AiOutlineClose className='text-3xl' /> 
        :  
          <FiMenu className={`${transition.state === 'loading' ? 'animate-pulse' : ''} text-3xl`} />
      }
      </button>      
      
      <div 
        id='mobile-nav-container' 
        className={`${showNav ? 'fixed' : 'absolute -translate-y-full'} duration-500 top-0 left-0 w-full bg-white`}
      >
        <MobileNavList onClick={() => setShowNav(false)}/>
      </div>
    </nav>

    <button
        aria-label="scroll to top of page"
        title="scroll to top"
        id="scroll-top-btn"
        onClick={handleClick} 
        className={`${showScrollBtn ? '' : 'hidden'} fixed bg-slate-300 z-50 w-10 h-10 p-2 rounded shadow-md bottom-4 right-4 flex items-center justify-center`}>
        <CgChevronUp className='text-2xl' />
      </button>
    </>
  )
}

export default NavBar