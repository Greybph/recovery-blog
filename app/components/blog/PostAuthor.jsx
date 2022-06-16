import {Link, useTransition} from 'remix'
import {HiArrowRight} from 'react-icons/hi'
import image from '~/assets/avatar.png'

function PostAuthor() {
  const transition = useTransition()

  return (
    <section className="p-4 mt-20 border-y">
       <div className="flex flex-col items-center px-2 py-2 md:py-10 md:items-start md:flex-row md:px-0">
        
    <a href="https://www.facebook.com/RecoveryOcean" target="_blank" rel="noreferrer" aria-label='Eric Anderson"s Facebook Page' title="Facebook">
      <div style={{backgroundImage: 'url("' + image + '")'}} className="w-4 h-4 p-10 mb-2 bg-top bg-cover rounded-full md:w-10 hover:bg-slate-200 duration-1000 md:h-10 md:mr-10 md:p-14 bg-slate-500 md:mb-0">
      </div>
    </a>
        
        <div className='flex flex-col items-center justify-center md:block not-prose'>
          <span className="block mb-2 text-lg font-bold tracking-tight text-slate-900 md:mb-0">Aritcle by Eric Anderson</span>
          <p className="pt-4 text-base leading-7 tracking-tight text-center md:text-base md:text-left">Eric Anderson is a web developer and <b>recovering</b> drug addict. By sharing his experience in drug addiction and recovery, he hopes to help families who have been impacted by this disease.</p>
          <Link to='/about' className='flex items-center float-right pt-10 text-2xl font-bold tracking-tight no-underline text-slate-900 group whitespace-nowrap'>
            Learn more about Eric
            <HiArrowRight className={`${transition.state === 'loading' && transition?.location?.pathname === '/about' ? 'animate-bounce bg-slate-900 text-white' : ''} p-2 ml-6 text-4xl duration-500 border-2 rounded-full border-slate-900 group-hover:text-white group-hover:bg-slate-900`}/>
          </Link>
        </div>
       
       </div>
    </section>
  )
}

export default PostAuthor