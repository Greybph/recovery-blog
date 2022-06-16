import {Outlet, useLoaderData} from 'remix'
import SubscribePopup from '~/components/SubscribePopup'
import subscribeUser from '../utils/subscribeUser.server'
import EndCTA from '../components/blog/EndCTA'
import submitQuestion from '~/utils/submitQuestion.server'
import postDex from '~/postDex'
import PostAuthor from '../components/blog/PostAuthor'

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
      <main className='justify-center px-4 md:px-0 md:flex lg:mt-20'>
        <article className='overflow-x-hidden prose py-28 prose-img:rounded-lg prose-a:text-blue-600 prose-slate lg:prose-xl'>
          <Outlet />
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