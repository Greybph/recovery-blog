import BlogPostCard from '~/components/blog/BlogPostCard'
import postDex from '~/postDex'

function ErrorPage({error = false}) {
  return (
    <div className="px-4 pt-24 md:pt-40 lg:pt-36 md:px-10 lg:px-28 xl:px-32 font-mont">
      <div>
        <span className='block text-center font-bold text-2xl xs:text-4xl sm:text-5xl lg:text-[4.5rem] md:text-[3rem]'>Oops!</span>
        <span className="block mt-2 text-lg font-medium tracking-tight text-center lg:mb-1 md:mt-4 md:text-3xl lg:text-4xl">{error ? "Something went wrong" : "Page not found"}</span>
      </div>

      <div className='flex flex-col grid-cols-3 my-16 md:gap-6 lg:gap-10 md:grid'>
        <BlogPostCard post={postDex[0]} link={true} />
        <BlogPostCard post={postDex[1]} />
        <BlogPostCard post={postDex[4]} />
      </div>
    </div>
  )
}

export default ErrorPage