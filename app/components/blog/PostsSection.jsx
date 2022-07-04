import BlogPostCard from '~/components/blog/BlogPostCard'
import postDex from '~/postDex'
import {useState, useEffect} from 'react'
import {gsap} from 'gsap'
import {Link, useTransition} from 'remix'
import CategoryButton from './CategoryButton'
import {BsShuffle} from 'react-icons/bs'
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi'

function PostsSection({filter= "all"}) {
  const transition = useTransition()
  const [category, setCategory] = useState(filter)
  const [shuffle, setShuffle] = useState(false)
  const [posts, setPosts] = useState(postDex)
  const [randomPostPath, setRandomPostPath] = useState(posts[Math.floor(Math.random() * posts.length)].to)
  const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  useEffect(() => {
    if (shuffle) {
      setPosts(shuffleArray(posts))
      setShuffle(false)
    }
  }, [shuffle, posts])

  useEffect(() => {
    if (window.scrollY > 370) window.scrollTo(
        0, 
        window.innerWidth >= 768 ? 190 : 0,
      )
  }, [category])

  useEffect(() => {
    gsap.to('#dice-icon', {
      rotate: 360,
      scale: 2,
    })
  }, [])

  useEffect(() => {
    gsap.from(`#cb-${category}`, {y: 20, duration: 0.3, stagger: 0.1})
  }, [category])

  useEffect(() => {
    setRandomPostPath(posts[Math.floor(Math.random() * posts.length)].to)
  }, [posts, category])

  return (
    <main className='px-4 pb-20 md:px-10 lg:px-28 xl:px-32'>
      <div className="flex mb-4 space-x-4 md:justify-center md:-mt-8 lg:justify-start lg:-mt-10">
        <button title="shuffle" aria-label="shuffle posts" onClick={() => setShuffle(true)} className="p-2 duration-100 border rounded-md shadow-md lg:hover:scale-105">
          <BsShuffle className="text-2xl text-blue-500 lg:text-2xl" />
        </button>
        <Link to={randomPostPath} id="dice-container" title="random" aria-label="random post" className={`${transition.state === 'loading' && transition.location.pathname === randomPostPath ? 'animate-spin' : '' } p-2 duration-100 rounded-md lg:hover:scale-105`}>
          <GiPerspectiveDiceSixFacesRandom id="dice-icon" className=' text-2xl text-blue-500 lg:text-2xl scale-0' />
        </Link>
      </div>
      
      <div className="flex justify-center mb-8 space-x-4 text-sm md:mb-10 lg:justify-start font-mont">
        <CategoryButton label="all" category={category} onClick={() => setCategory("all")} />
        <CategoryButton label="addiction" category={category} onClick={() => setCategory("addiction")} />
        <CategoryButton label="recovery" category={category} onClick={() => setCategory("recovery")} />
      </div>
      
      <div className="justify-center md:flex lg:block">
        <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 lg:w-[80vw] xl:w-[70vw] space-y-8 md:space-y-0'>
          
          {category === "all" ? 
            posts.map(post => (
              <BlogPostCard 
                key={post.id}
                post={post}
                onClick={
                  post.category === "addiction" ?
                  () => setCategory("addiction") :
                  () => setCategory("recovery") 
                }
              />)) 
          : 
            posts.filter(post => post.category === category).map(post => (
              <BlogPostCard 
                key={post.id}
                post={post}
                onClick={
                  post.category === "addiction" ?
                  () => setCategory("addiction") :
                  () => setCategory("recovery") 
                }
              />))
          }

        </div>
      </div>
    </main>
  )
}

export default PostsSection