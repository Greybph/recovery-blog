import Hero from '~/components/about/Hero'
import RecentPostsSection from '~/components/index/RecentPostsSection'
import MissionSection from '~/components/about/MissionSection'
import CountDownSection from '~/components/about/CountDownSection'
import BioSection from '~/components/about/BioSection'

export const meta = () => {
  return {
    title: "About Recovery Ocean",
    description: "Recovery Ocean is a drug addiction and recovery blog. Get raw and unfiltered stories, advice, and lessons learned from my eight years in drug addiction.",
    "og:image": "https://res.cloudinary.com/recovery-ocean/image/upload/v1654557644/recovery_ocean_home_image_ykkae9.png"
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