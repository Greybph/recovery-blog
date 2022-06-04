import Hero from '~/components/about/Hero'
import RecentPostsSection from '~/components/index/RecentPostsSection'
import MissionSection from '~/components/about/MissionSection'
import CountDownSection from '~/components/about/CountDownSection'
import BioSection from '~/components/about/BioSection'

export const meta = () => {
  return {
    title: "About Recovery Ocean",
    description: "Drug addiction is a nightmare, but recovery is possible. Recovery Ocean for anyone whose been impacted by drug addiction."
  }
}

function AboutPage() {
  return (
    <div>
      <Hero />
      <MissionSection />
      <BioSection />
      <CountDownSection />
      <RecentPostsSection />
    </div>
  )
}

export default AboutPage