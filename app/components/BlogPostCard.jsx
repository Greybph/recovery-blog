import { Link } from "remix"

function BlogPostCard({image, title, category, description, to}) {
  return (
    <article className="flex relative md:flex-col duration-500 bg-white md:max-w-[18rem] rounded-md shadow-md font-mont">
     
      <div 
        className="bg-cover hidden sm:block min-w-[6rem] lg:rounded-bl-none rounded-l-md h-30 lg:w-full lg:h-40 lg:rounded-t-md"
        style={{backgroundImage: "url('" + image + "')"}}>
      </div>
      
      <div className="absolute w-[90%] h-[90%] mx-auto left-0 right-0 my-auto top-0 bottom-0">
        <div 
          className="absolute z-50 md:w-10 md:h-10 duration-500 bg-black bg-opacity-50 bg-cover rounded-md shadow-md right-0 top-0 lg:hidden hover:w-[100%] hover:h-[100%]"
          style={{backgroundImage: "url('" + image + "')"}}>
        </div>

      </div>
     
      <div className="z-40 px-4 py-4">
        <span className={`${category === 'recovery' ? 'text-blue-500' : 'text-red-500'} block mb-2 font-medium text-tiny lg:text-xs`}>{category}</span>
        <span className="block mb-3 font-medium lg:text-xl">{title}</span>
        <p className="mb-4 leading-6 lg:leading-6 text-tiny lg:text-xs">{description}</p>
        <Link to='/' className={`${category === 'recovery' ? 'bg-blue-500' : 'bg-red-500'}  float-right px-4 py-2 text-xs font-medium z-10 text-white duration-100 hover:bg-opacity-90 rounded-md`}>
          Full Article
        </Link>
      </div>
    </article>
  )
}

export default BlogPostCard