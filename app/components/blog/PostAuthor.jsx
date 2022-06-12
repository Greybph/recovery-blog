import {Link, useTransition} from 'remix'
import {HiArrowRight} from 'react-icons/hi'

function PostAuthor() {
  const transition = useTransition()

  return (
    <section className="mt-10 md:mt-20 border-y">
       <div className="flex flex-col items-center px-4 py-6 md:py-10 md:items-start md:flex-row md:px-0">
        <div className="w-10 h-10 mb-2 rounded-full md:mr-10 p-14 bg-slate-300 md:mb-0"></div>
        
        <div className='flex flex-col items-center justify-center md:block not-prose'>
          <span className="block mb-2 text-lg font-bold tracking-tight text-slate-900 md:mb-0">Aritcle by Eric Anderson</span>
          <p className="text-base tracking-tight text-center md:text-left">Eric Anderson is a web developer and <b>recovering</b> drug addict. By sharing his experience in drug addiction and recovery, he hopes to inspire and help families who have been impacted by drug addiction.</p>
          <Link to='/about' className='flex items-center float-right pt-6 text-2xl font-bold tracking-tight no-underline text-slate-900 group'>
            Learn more about Eric
            <HiArrowRight className={`${transition.state === 'loading' && transition?.location?.pathname === '/about' ? 'animate-bounce bg-slate-900 text-white' : ''} p-2 ml-6 text-4xl duration-500 border-2 rounded-full border-slate-900 group-hover:text-white group-hover:bg-slate-900`}/>
          </Link>
        </div>
       
       </div>
    </section>
  )
}

export default PostAuthor