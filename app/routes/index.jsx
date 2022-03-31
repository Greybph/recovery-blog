import Hero from "~/components/index/Hero"
import RecentPostsSection from '~/components/index/RecentPostsSection'
import ContentBreak from '~/components/index/ContentBreak'
import StoriesSection from '~/components/index/StoriesSection'

export const meta = () => {
  return {
    title: "Home Page",
  }
}

export default function Index() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      {/* <ContentBreak /> */}
      {/* <RecentPostsSection />
      <StoriesSection />
      <div className="h-screen"></div> */}
    </div>
  )
}