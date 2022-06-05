import {Outlet, useLoaderData} from 'remix'
import SubscribePopup from '~/components/SubscribePopup'
import AskMeSection from '../components/blog/AskMeSection'
import subscribeUser from '../utils/subscribeUser.server'
import EndCTA from '../components/blog/EndCTA'
import submitQuestion from '~/utils/submitQuestion.server'


export const meta = () => {
  return {
    "og:type": "article",
    "author": "Eric Anderson",
  }
}

export function loader() {
  return [Math.floor(Math.random() * 3), Math.floor((Math.random() * 3) + 3)]
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
      let idxs = useLoaderData()

  return (
    <>
      <main className='justify-center px-4 md:px-0 md:flex lg:mt-20'>
        <article className='overflow-x-hidden prose py-28 prose-img:rounded-lg prose-a:text-blue-600 prose-slate lg:prose-xl'>
          <Outlet />
        </article>
      </main> 
      <div className='flex items-center justify-center pb-20'>
        <EndCTA idxs={idxs} />
      </div>
      <SubscribePopup />
      <AskMeSection />
    </>
  )
}

export default Blog