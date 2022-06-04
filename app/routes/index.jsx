import Hero from "~/components/index/Hero"
import RecentPostsSection from '~/components/index/RecentPostsSection'
import AddictionTextSection from '~/components/index/AddictionTextSection'
import RecoveryTextSection from "../components/index/RecoveryTextSection"
import WeCanRecoverSection from '~/components/index/WeCanRecoverSection'
import NotAloneSection from '~/components/index/NotAloneSection'
import AskMeSection from '~/components/blog/AskMeSection'
import image from '~/assets/hopeful-man-in-nature.jpg'

export const meta = () => {
  return {
    title: "Drug Addiction & Recovery Blog - Home | RecoveryOcean",
    description: "Raw stories, advice, and lessons learned from drug addiction. Focused on helping addicts and their families better understand this disease.",
    keywords: "Drug Addiction Blog, Recovery Blog, Drug Addiction Stories, Drug Addiction Awareness, Drug Addiction Recovery Awareness",
    author: "Eric Anderson",
    
  }
}

export const links = () => {
  return [
    {rel: "preload", as: "image", href: image}
  ]
}

export default function Index() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <AddictionTextSection />
      <NotAloneSection />
      <RecoveryTextSection />
      <WeCanRecoverSection image={image} />
      <RecentPostsSection />
      <AskMeSection />
    </div>

























  )
}