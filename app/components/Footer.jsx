import { Link } from "remix"
import {BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="px-4 pt-8 pb-12 md:pb-0 lg:py-14 font-mont md:px-10 lg:px-28 bg-slate-900">
      <div className="flex flex-col items-center justify-between pb-6 space-y-2 border-b-2 md:space-y-6 border-slate-600">
        <div>
          <span className="block mb-1 text-xl font-medium text-center md:mb-2 md:text-3xl text-slate-100">Recovery Ocean</span>
          <p className="mb-2 text-sm font-medium text-center text-slate-500 md:text-base md:mb-0">Drug addiction and recovery blog</p>
        </div>

        <div className="flex items-center justify-center space-x-4 md:space-x-10">
          <Link to='/' className='font-medium duration-100 text-slate-300 hover:text-slate-100'>
            Home
          </Link>
          <Link to='/blog' className='font-medium duration-100 hover:text-slate-100 text-slate-300'>
            Blog
          </Link>
          <Link to='/about' className='font-medium duration-100 hover:text-slate-100 text-slate-300'>
            About
          </Link>
          <Link to='/contact' className='font-medium duration-100 hover:text-slate-100 text-slate-300'>
            Contact
          </Link>
        </div>

      </div>
        <div className="flex items-center justify-center pt-4 md:pt-6">
          <a href="https://www.facebook.com/RecoveryOcean"    
            target="_blank" rel="noreferrer">
            <BsFacebook className="text-3xl duration-100 hover:text-slate-100 text-slate-300" />
          </a>
        </div>


    </footer>
  )
}

export default Footer