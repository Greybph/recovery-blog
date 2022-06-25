import Hero from "~/components/index/Hero"
import RecentPostsSection from '~/components/index/RecentPostsSection'
import AddictionTextSection from '~/components/index/AddictionTextSection'
import RecoveryTextSection from "../components/index/RecoveryTextSection"
import WeCanRecoverSection from '~/components/index/WeCanRecoverSection'
import NotAloneSection from '~/components/index/NotAloneSection'
import AskMeSection from '~/components/blog/AskMeSection'
import image from '~/assets/hopeful-man-in-nature.jpg'
import submitQuestion from '~/utils/submitQuestion.server'

export const meta = () => {
  return {
    title: "Drug Addiction & Recovery Blog - Home | RecoveryOcean",
    description: "Raw stories, advice, and lessons learned from drug addiction. Focused on helping addicts and their families better understand this disease.",
    keywords: "Drug Addiction Blog, Recovery Blog, Drug Addiction Stories, Drug Addiction Awareness, Drug Addiction Recovery Awareness",
    author: "Eric Anderson",
    'og:title': 'Drug Addiction & Recovery Blog - Home | RecoveryOcean',
    'og:description': "Raw stories, advice, and lessons learned from drug addiction.",
    'og:image': "https://res.cloudinary.com/recovery-ocean/image/upload/v1654557644/recovery_ocean_home_image_ykkae9.png",
    "og:url": "https://www.recoveryocean.com"
  }
}

export const links = () => {
  return [
    {rel: "preload", as: "image", href: image},
    {rel: "canonical", href: 'https://www.recoveryocean.com'},
  ]
}

export async function action({request}) {
  const formData = await request.formData()
  const {_action, ...values} = Object.fromEntries(formData)

  switch (_action) {
    case "question":
      return submitQuestion(values)
    default:
      return null
  }
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