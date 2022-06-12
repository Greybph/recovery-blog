import {Link} from 'remix'
import Footer from '~/components/Footer'
import {useEffect} from 'react'

function ErrorPage({error = false}) {

  useEffect(() => {
    const reloadCount = sessionStorage.getItem('reloadCount')
    if (error && (!reloadCount || reloadCount < 1)) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1))
      window.location.reload()
    } else {
      sessionStorage.removeItem('reloadCount')
    }
  }, [error])

  return (
    <div className="pt-24 pb-10 md:pt-40 lg:pt-36 font-mont">
      <div>
        <span className='block text-center font-bold text-4xl lg:text-[4.5rem] md:text-[3rem]'>Oops!</span>
        <span className="block mt-2 text-lg font-medium tracking-tight text-center lg:mb-1 md:mt-4 md:text-3xl lg:text-4xl">{error ? "Something went wrong" : "Page not found"}</span>
      </div>

    {!error ? (
      <div className='flex flex-col items-center justify-center mt-10 space-y-4 lg:mt-20'>
      <Link to="/posts" className='block cursor-pointer py-4 text-lg font-medium text-center duration-300 border-4 rounded-md md:text-2xl lg:text-3xl w-72 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'>
        Blog
      </Link>
      <Link to="/" className='block py-4 cursor-pointer text-lg font-medium text-center duration-300 border-4 rounded-md md:text-2xl lg:text-3xl w-72 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'>
        Home
      </Link>
    </div>
    ) : (
      <div className='flex justify-center mt-10 lg:mt-20'>
      <button className='py-4 text-lg cursor-pointer font-medium text-center duration-300 border-4 rounded-md md:text-2xl lg:text-3xl w-72 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' onClick={() => window.location.reload()}>
        Try Again
      </button>
      
    </div>
    )
    }

    <div className='absolute bottom-0 left-0 right-0 pt-44 lg:static'>
      <Footer />
    </div>

    </div>
  )
}

export default ErrorPage