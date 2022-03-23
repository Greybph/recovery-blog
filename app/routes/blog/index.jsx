import Hero from "~/components/blog/Hero"
import BlogPostPreview from "~/components/blog/BlogPostPreview"

function BlogPage() {
  return (
    <div>
      <Hero />
      <main className="px-4 py-10 lg:px-28 md:px-10">
        <BlogPostPreview>
          <div className="w-full py-6 mb-4 rounded bg-slate-600">HELLo</div>
        </BlogPostPreview>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </main>
    </div>
  )
}

export default BlogPage