import {Link, Form, useTransition} from 'remix'
import {useState} from 'react'

function BlogPostCard({post, onClick}) {
  const transition = useTransition()
  const [showLoading, setShowLoading] = useState(false)

  return (
    <article className='relative flex flex-col w-full border rounded-md shadow md:max-w-xs not-prose'>
      <Link to={post.to}>
        <img
          className='object-cover w-full h-32 max-w-full aspect-auto md:h-24 lg:h-28 rounded-t-md hover:opacity-95' 
          src={post.image} alt={post.alt} title={post.title}/>
      </Link>
      
      <div className='px-4'>
        {onClick ? (
          <span 
            className={`${post.category === 'recovery' ? 'text-blue-500' : 'text-red-500'} block mb-4 font-bold text-sm pt-4 cursor-pointer hover:underline`} 
            onClick={onClick}>
            {post.category}
          </span>
        ) 
        : (
          <Form action="/posts" method="post">
            <input type="hidden" name="_action" value="category" />
            <button type="submit" name="category" value={post.category} className={`${post.category === 'recovery' ? 'text-blue-500' : 'text-red-500'} ${showLoading ? 'animate-pulse' : ''} block mb-4 font-bold text-sm pt-4 cursor-pointer hover:underline`}
            onClick={() => setShowLoading(true)}>
              {showLoading ? "Loading..." : post.category}
            </button>
          </Form>
        )}
      
        <h2 className='my-2 text-2xl font-bold md:text-lg text-slate-700 lg:text-2xl'>
          <Link className="hover:underline" to={post.to}>{post.title}</Link>
        </h2>
        <p className='pb-16 text-sm font-medium leading-6 text-slate-700 lg:leading-7 lg:text-base'>{post.description}</p>
        <Link to={post.to} className={`${post.category === 'recovery' ? 'bg-blue-500' : 'bg-red-500'} ${transition.state === "loading" && transition.location?.pathname === post.to ? 'animate-bounce' : ''} absolute bottom-3 right-3 px-4 py-2 text-xs font-medium text-white duration-100 hover:bg-opacity-90 rounded-md`}>
          Full Article
        </Link>
      </div>
    </article>
  )
}

export default BlogPostCard