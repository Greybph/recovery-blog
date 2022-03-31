import BlogPostCard from "../BlogPostCard"
import hero from '~/assets/hero.jpg'
import { Link } from "remix"
import {useEffect} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function RecentPostsSection() {

  useEffect(() => {
    gsap.from('#recent-articles-tag', {
      x: -90,
      opacity: 0,
     
      scrollTrigger: {
        trigger: '#recent-articles-tag',
        scrub: 1,
        start: 'top 95%',
        end: 'top 80%'
      }
    })
  }, [])

  return (
    <section className="relative px-4 md:mt-32 md:px-10 font-mont lg:px-28">
      <span id="recent-articles-tag" className="block font-bold text-emerald-500">Recent Articles</span>
      <span className="block pt-4 pb-10 text-2xl font-medium tracking-tighter md:pb-16 lg:pb-20 md:text-center sm:text-3xl md:text-5xl lg:text-6xl">Addiction and Recovery Help</span>
      
      <div className="flex flex-col space-y-4 justify-evenly md:space-y-0 md:flex-row md:space-x-8 lg:space-x-10">
        <BlogPostCard 
          image={hero}
          category="recovery"
          description=" Find out how to make a blogpost card and make it look really good as well Find out how to make a blogpost card and make it look really good as well"
          title="Blog Post Card"
          to='/'
        />
        <BlogPostCard 
          image={hero}
          category="addiction"
          description=" Find out how to make a blogpost card and make it look really good as well Find out how to make a blogpost card and make it look really good as well"
          title="Blog Post Card"
          to='/'
        />
        <BlogPostCard 
          image={hero}
          category="recovery"
          description=" Find out how to make a blogpost card and make it look really good as well Find out how to make a blogpost card and make it look really good as well"
          title="Blog Post Card"
          to='/'
        />
      </div>

      <Link to='/' className="flex items-center justify-between mx-auto mt-10 text-sm font-medium rounded-md group w-fit">
        Browse all posts
        <BsArrowRight className="ml-3 text-xl duration-300 group-hover:translate-x-2 group-hover:scale-125" />
      </Link>

    </section>
  )
}

export default RecentPostsSection