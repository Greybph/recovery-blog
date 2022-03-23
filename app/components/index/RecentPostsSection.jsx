import BlogPostCard from "../BlogPostCard"
import hero from '~/assets/hero.jpg'
import { Link } from "remix"
import {BsArrowRight} from 'react-icons/bs'

function RecentPostsSection() {
  return (
    <section className="relative px-4 py-20 md:px-10 font-mont lg:px-28">
      <span className="block mb-8 text-2xl font-medium tracking-tighter md:mb-20 sm:text-3xl md:text-center md:text-5xl lg:text-6xl">Recent Posts</span>
      
      <div className="flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-10">
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