import {Link} from 'remix'
import {FiMenu} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import MobileNavList from './MobileNavList'
import {gsap} from 'gsap'
import ScrollNav from './ScrollNav'

function NavBar() {
  const [showNav, setShowNav] = useState(false)
  const [toggleIcon, setToggleIcon] = useState('menu')
  const [firstRender, setFirstRender] = useState(true)

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
  }, [firstRender])

  return (
    <nav className='absolute top-0 flex items-center justify-between w-full px-4 py-6 font-medium bg-transparent font-mont md:px-12 lg:px-28'>
      <Link to='/' className='z-10 text-2xl'>LOGO</Link>
      <ul className='hidden space-x-16 md:flex'>
        <li>
          <Link to='/'>topics</Link>
        </li>
        <li>
          <Link to='/blog'>blog</Link>
        </li>
        <li>
          <Link to='/'>resources</Link>
        </li>
        <li>
          <Link to='/'>stories</Link>
        </li>
      </ul>

      <button
        id="nav-toggle"
        className='z-10 md:hidden shadow bg-white bg-opacity-80 rounded p-2'
        onClick={() => setShowNav(!showNav)}
      >
        {toggleIcon === 'close' ? 
          <AiOutlineClose className='text-3xl' /> 
        :  
          <FiMenu className='text-3xl' />
      }
      </button>      
      
      <div 
        id='mobile-nav-container' 
        className={`${showNav ? '' : '-translate-y-full'} duration-500 top-0 left-0 absolute w-full bg-white`}
      >
        <MobileNavList />
      </div>
      
      <ScrollNav />
    </nav>
  )
}

export default NavBar