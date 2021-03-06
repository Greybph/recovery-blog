import PostsSection from '~/components/blog/PostsSection'
import AskMeSection from '~/components/blog/AskMeSection'
import submitQuestion from '~/utils/submitQuestion.server'
import goToCategory from '~/utils/goToCategory'
import { useActionData } from 'remix'
import { useEffect } from 'react'

export const links = () => {
  return [
    {rel: "canonical", href: 'https://www.recoveryocean.com/posts'}
  ]
}

export const meta = () => {
  return {
    title: "Recovery Ocean Blog by Eric Anderson",
    description: "The Recovery Ocean blog features raw articles on drug addiction and recovery drawn from the experiences of Eric Anderson's eight years of heroin addiction.",
    "og:description": "The Recovery Ocean blog features raw articles on drug addiction and recovery drawn from my experiences during eight years of heroin addiction.",
    'og:image': "https://res.cloudinary.com/recovery-ocean/image/upload/v1654557644/recovery_ocean_home_image_ykkae9.png",
  }
}

export async function action({request}) {
  const formData = await request.formData()
  const {_action, ...values} = Object.fromEntries(formData)

  switch (_action) {
    case "question":
      return submitQuestion(values)
    case "category":
      return goToCategory(values)
    default:
      return null
  }
}

function PostsPage() {
  const action = useActionData()

  useEffect(() => {
    if (action?.scrollTop) {
      window.scrollTo({top: 0})
    }
  }, [action])

  return (
    <section>
      <div className='px-4 pt-24 pb-8 md:pb-20 md:pt-40 lg:pt-36 md:px-10 lg:px-28 xl:px-32 font-mont'>
        <span className='block text-center lg:text-left font-bold text-3xl lg:text-[4.5rem] md:text-[3rem] whitespace-nowrap'>Recovery Ocean Blog</span>
        <div className='mt-2 space-y-4 md:space-y-8 md:mt-6'>
          <span className="block text-lg font-medium tracking-tight text-center lg:text-left md:text-3xl">By Eric Anderson</span>
        </div>
      </div>

      <PostsSection filter={action?.category} />
      <AskMeSection />
    </section>
  )
}

export default PostsPage