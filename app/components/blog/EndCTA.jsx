import postDex from '~/postDex'
import BlogPostCard from './BlogPostCard'
import {Link, useTransition, useLocation} from 'remix'
import {BsArrowRight} from 'react-icons/bs'
import {useRef} from 'react'


function EndCTA() {
  const transition = useTransition()
  const slug = useLocation().pathname
  const addictionSuggestions = 
    postDex.filter(post => post.to !== slug && post.category === "addiction")
  const recoverySuggestions = 
    postDex.filter(post => post.to !== slug && post.category === "recovery")

  const idx1 = useRef(Math.floor(Math.random() * addictionSuggestions.length))
  const idx2 = useRef(Math.floor(Math.random() * recoverySuggestions.length))

  return (
    <div className="px-4 pt-12 -mb-10 border-t md:pt-20 md:-mb-0 not-prose md:px-0">
      <span className="block mb-4 text-4xl font-bold tracking-tight font-mont">Don't stop now!</span>
      <p className="text-lg ">Check out these posts for more insight into drug addiction and recovery.</p>
      <div className='grid-cols-2 gap-10 pt-6 md:pt-10 md:grid'>
        <BlogPostCard post={addictionSuggestions[idx1.current]} />
        <BlogPostCard post={recoverySuggestions[idx2.current]} />
      </div>

      <Link to='/posts' className="flex items-center justify-between mx-auto mt-10 font-medium rounded-md md:mt-14 group w-fit md:text-lg">
        Browse all posts
        <BsArrowRight className={`${transition.state === "loading" ? 'scale-125 animate-pulse' : ''} ml-3 text-xl duration-300 group-hover:translate-x-2 group-hover:scale-125`} />
      </Link>
    </div>
  )
}

export default EndCTA