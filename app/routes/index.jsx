import Hero from "~/components/index/Hero"
import RecentPostsSection from '~/components/index/RecentPostsSection'
import ContentBreak from '~/components/index/ContentBreak'

export const meta = () => {
  return {
    title: "Home Page",
  }
}

export default function Index() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <ContentBreak />
      <RecentPostsSection />
    </main>
  )
}