import BlogPostCard from '~/components/blog/BlogPostCard'
import postDex from '~/postDex'
import {Link} from 'remix'

function ErrorPage({error = false}) {
  return (
    <div className="px-4 pt-24 pb-10 md:pt-40 lg:pt-36 md:px-10 lg:px-28 xl:px-32 font-mont">
      <div>
        <span className='block text-center font-bold text-4xl lg:text-[4.5rem] md:text-[3rem]'>Oops!</span>
        <span className="block mt-2 text-lg font-medium tracking-tight text-center lg:mb-1 md:mt-4 md:text-3xl lg:text-4xl">{error ? "Something went wrong" : "Page not found"}</span>
      </div>

    {!error ? (
      <div className='flex flex-col items-center justify-center mt-10 space-y-4 lg:mt-20'>
      <Link to="/posts" className='block py-4 text-lg font-medium text-center duration-300 border-4 rounded-md lg:text-3xl w-72 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'>
        Blog
      </Link>
      <Link to="/" className='block py-4 text-lg font-medium text-center duration-300 border-4 rounded-md lg:text-3xl w-72 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'>
        Home
      </Link>
    </div>
    ) : (
      <div className='flex justify-center mt-10 lg:mt-20'>
      <button className='py-4 text-lg font-medium text-center duration-300 border-4 rounded-md lg:text-3xl w-72 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' onClick={() => window.location.reload()}>
        Try Again
      </button>
      
    </div>
    )
    }
      
      <div className='flex flex-col grid-cols-3 my-16 md:gap-6 lg:gap-10 md:grid'>
        <BlogPostCard post={postDex[0]} />
        <BlogPostCard post={postDex[1]} />
        <BlogPostCard post={postDex[4]} />
      </div>

    </div>
  )
}

export default ErrorPage