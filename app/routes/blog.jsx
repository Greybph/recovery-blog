import {Outlet} from 'remix'
import SubscribePopup from '~/components/SubscribePopup'
import subscribeUser from '../utils/subscribeUser.server'
import EndCTA from '../components/blog/EndCTA'
import submitQuestion from '~/utils/submitQuestion.server'
import PostAuthor from '../components/blog/PostAuthor'
import SocialShare from '~/components/utility/SocialShare'

export const meta = () => {
  return {
    "og:type": "article",
    "author": "Eric Anderson",
  }
}

export async function action({request}){
  const formData = await request.formData()
  const {_action, ...values} = Object.fromEntries(formData)
  
  switch (_action) {
    case "subscribe":
      return subscribeUser(values)
    case "question":
      return submitQuestion(values)
      default:
        return null
      }
    }
    
  function Blog() {

  return (
    <>
      <main className='flex justify-center px-4 md:px-0 lg:mt-20'>
        <article className='overflow-x-hidden prose py-28 prose-img:rounded-lg prose-a:text-blue-600 prose-slate lg:prose-xl'>
          <Outlet />
          {/* <SocialShare /> */}
          <PostAuthor /> 
        </article>
      </main>
      <section className='flex items-center justify-center pb-20'>
        <EndCTA />
      </section>
      <SubscribePopup />
    </>
  )
}

export default Blog