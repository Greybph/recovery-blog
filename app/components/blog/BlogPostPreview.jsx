import { Link } from "remix"

function BlogPostPreview({children}) {
  return (
    <article className="max-w-xl mx-auto font-mont">
      <header>
        <h2 className="max-w-md text-3xl font-bold">
          <Link to='/' className="duration-300 hover:text-emerald-800">
            How to Get Off Drugs: Top 3 Approaches
          </Link>    
        </h2>
        <span className="block mx-auto my-6 text-xs">by Andrew Fauth - Updated Mar. 22, 2022</span>
      </header>

      {children}

      <div className="space-y-4 text-sm font-medium">
        <p>Guide to getting off of drugs in 2022</p>
        <p>The first step to tackling a drug addiction is getting clean.</p>
        <p className="leading-7">The way you go about handling this matters as it tends to set the tone for your recovery.</p>
        <p className="leading-7">With so many options out there, how can you know what the best option for you is? This detailed guide covers the various options available to you so that you can choose one that fits your needs and start your journey of recovery.</p>
      </div>

      <footer className="mt-6">
        <Link className="block w-full px-4 py-2 font-bold text-center text-white rounded bg-emerald-300" to='/'>Read Article</Link>
      </footer>

    </article>
  )
}

export default BlogPostPreview