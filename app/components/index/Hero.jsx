import {Link} from 'remix'
import {CgChevronRight} from 'react-icons/cg'
import heroBg from '~/assets/heroBg4.jpg'

function Hero() {


  return (
    <section style={{backgroundImage: `url('${heroBg}')`}} className="flex mb-20 md:mb-0 flex-col px-4 bg-white md:bg-blend-normal bg-cover pt-24 md:pt-28 lg:pt-32 md:bg-right lg:bg-right h-[90vh] xs:h-[65vh] md:h-[85vh] md:px-10 lg:px-20 xl:px-28 font-mont">
      <span className='text-sm font-bold tracking-tighter md:text-base text-slate-900'>Drug Addiction & Recovery Blog</span>
      <span className='block text-2xl tracking-tight xs:text-4xl font-bold sm:text-5xl lg:text-[5rem] xl:text-[5.5rem] md:text-[3.9rem]'>
        Recovery <span className=''>Ocean</span>
      </span>
      <p className='ml-1 md:max-w-[45rem] pt-5 text-xs font-medium leading-7 md:leading-9 md:text-xl'>If you or your loved one is drowning in drug addiction, it is not too late. People have beaten this disease. You can too.</p>
      <Link className='flex items-center px-3 py-2 mt-8 text-sm font-bold border-2 border-black group w-fit' to='/'>
        Find out how
        <CgChevronRight className='ml-3 text-xl duration-300 group-hover:scale-125 group-hover:mr-4 group-hover:translate-x-4'/>
      </Link>
    </section>
  )
}

export default Hero