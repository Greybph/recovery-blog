import BlogPostCard from '~/components/blog/BlogPostCard'
import postDex from '~/postDex'
import {useState, useEffect} from 'react'
import {gsap} from 'gsap'
import CategoryButton from './CategoryButton'

function PostsSection({filter= "all"}) {
  const [category, setCategory] = useState(filter)

  useEffect(() => {
    if (window.scrollY > 370) window.scrollTo(
        0, 
        window.innerWidth >= 768 ? 250 : 0,
      )
  }, [category])

  useEffect(() => {
    if (category === 'all')
      gsap.from('#cb-all', {y:20, duration: 0.3, stagger: 0.1})
    
    if (category === 'addiction')
      gsap.from('#cb-addiction', {y:20, duration: 0.3, stagger: 0.1})
    
    if (category === 'recovery')
      gsap.from('#cb-recovery', {y:20, duration: 0.3, stagger: 0.1})
    
  }, [category])

  return (
    <main className='px-4 pb-20 md:px-10 lg:px-28 xl:px-32'>
      <div className="flex justify-center mb-8 space-x-4 text-sm md:mb-10 lg:justify-start font-mont">
        <CategoryButton label="all" category={category} onClick={() => setCategory("all")} />
        <CategoryButton label="addiction" category={category} onClick={() => setCategory("addiction")} />
        <CategoryButton label="recovery" category={category} onClick={() => setCategory("recovery")} />
      </div>
      
      <div className="justify-center md:flex lg:block">
        <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 lg:w-[80vw] xl:w-[70vw] space-y-8 md:space-y-0'>
          {category === "all" && postDex.map(post => (
            <BlogPostCard 
            key={post.id}
            post={post}
            onClick={
              post.category === "addiction" ?
              () => setCategory("addiction") :
              () => setCategory("recovery") 
            }
          />
          ))}
          
          {category === "addiction" && postDex.filter(post => post.category === "addiction").map(post => (
            <BlogPostCard 
            key={post.id}
            post={post}
            onClick={() => setCategory("addiction")}
          />
          ))}
          
          {category === "recovery" && postDex.filter(post => post.category === "recovery").map(post => (
            <BlogPostCard 
            key={post.id}
            post={post}
            onClick={() => setCategory("recovery")}
          />
          ))}


        </div>
      </div>
    </main>
  )
}

export default PostsSection