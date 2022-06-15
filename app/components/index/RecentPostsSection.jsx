import BlogPostCard from "~/components/blog/BlogPostCard"
import postDex from '~/postDex'
import { Link, useTransition } from "remix"
import {useEffect} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function RecentPostsSection() {
  const transition = useTransition()

  useEffect(() => {
    gsap.from('#recent-articles-tag', {
      x: -90,
      opacity: 0,
      scrollTrigger: {
        trigger: '#recent-articles-tag',
        scrub: 1,
        start: 'top 20%',
        end: 'top 80%'
      }
    })
  }, [])

  return (
    <section className="relative px-4 py-20 pb-10 md:py-32 md:px-10 lg:py-40 font-mont lg:px-28">
      <span id="recent-articles-tag" className="block pt-6 font-bold text-slate-500 text-tiny md:text-base">Recent Articles</span>
      <span className="block pt-2 pb-8 text-2xl font-bold tracking-tighter text-center md:pb-16 lg:pb-20 md:text-4xl lg:text-5xl">Addiction and Recovery Blog</span>
      
      <div className="flex flex-col space-y-4 justify-evenly md:space-y-0 md:flex-row md:space-x-8 lg:space-x-0">
        <BlogPostCard 
          post={postDex[postDex.length - 1]}
        />
        <BlogPostCard 
          post={postDex[postDex.length - 2]}
        />
        <BlogPostCard 
          post={postDex[postDex.length - 3]}
        />
        
      </div>

      <Link to='/posts' className="flex items-center justify-between mx-auto mt-10 font-medium rounded-md md:mt-14 group w-fit md:text-lg">
        Browse all posts
        <BsArrowRight className={`${transition.state === 'loading' && 'scale-125 animate-pulse translate-x-2'} ml-3 text-xl duration-300 group-hover:translate-x-2 group-hover:scale-125`} />
      </Link>

    </section>
  )
}

export default RecentPostsSection