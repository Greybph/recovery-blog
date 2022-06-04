import postDex from '~/postDex'
import BlogPostCard from './BlogPostCard'
import {Link, useTransition, useLocation} from 'remix'
import {BsArrowRight} from 'react-icons/bs'

function EndCTA({idxs}) {
  const transition = useTransition()
  const slug = useLocation().pathname
  
  return (
    <section className="pt-12 -mb-10 border-t md:pt-20 md:-mb-0 not-prose">
      <span className="block mb-4 text-4xl font-bold">Don't stop now!</span>
      <p className="text-lg ">Check out these posts for more insight into drug addiction and recovery.</p>
      
      <div className='grid-cols-2 gap-10 pt-6 md:pt-10 md:grid'>
        <BlogPostCard post={postDex.filter(post => post.to !== slug)[idxs[0]]} />
        <BlogPostCard post={postDex.filter(post => post.to !== slug)[idxs[1]]}/>
      </div>

      <Link to='/posts' className="flex items-center justify-between mx-auto mt-10 font-medium rounded-md md:mt-14 group w-fit md:text-lg">
        Browse all posts
        <BsArrowRight className={`${transition.state === "loading" ? 'scale-125 animate-pulse' : ''} ml-3 text-xl duration-300 group-hover:translate-x-2 group-hover:scale-125`} />
      </Link>
    </section>
  )
}

export default EndCTA