import {Link} from 'remix'
import {CgChevronRight} from 'react-icons/cg'

function Hero() {

  return (
    <section className="px-4 pt-24 mb-[2.5rem] md:px-10 lg:px-28 md:pt-32 font-mont">
      <span className='block text-3xl font-bold sm:text-5xl lg:text-7xl md:text-6xl'>
        Recovery is <span className='text-sky-600' id='recovery-text'>possible</span>
      </span>
      <span className='block pt-3 text-xl font-bold sm:text-2xl md:font-medium md:text-4xl lg:text-5xl'>It's not too late</span>
      <p className='pt-5 text-xs font-medium leading-7 sm:max-w-lg md:leading-9 md:text-base '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nisi earum nihil dicta fugit illo. Temporibus, rerum. Iusto asperiores repudiandae excepturi impedit est, tempora dolores talga?</p>
      <Link className='flex items-center px-3 py-2 mt-8 text-xs font-bold duration-300 border-2 border-black hover:bg-sky-600 hover:bg-opacity-30 hover:scale-105 w-fit' to='/'>
        Find out how
        <CgChevronRight className='ml-4 text-lg'/>
      </Link>
      <Link to='/' className='flex mt-5 text-sm font-bold duration-300 hover:translate-x-1 center'>
        Learn more about this disease
      </Link>
    </section>
  )
}

export default Hero