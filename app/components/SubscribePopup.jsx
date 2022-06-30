import {useFetcher, useLocation} from 'remix'
import emailIcon from '~/assets/emailIcon.svg'
import {CgClose} from 'react-icons/cg'
import {useState, useEffect} from "react"
import FlashMessage from '~/components/utility/FlashMessage'
import {gsap} from 'gsap'

function SubscriblePopup() {
  const fetcher = useFetcher()
  const path = useLocation().pathname.split("/")[2]
  const [showPopup, setShowPopup] = useState(false)
  const [closePopup, setClosePopup] = useState(false)
  const [didSubscribe, setDidSubscribe] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [isPhone, setIsPhone] = useState()

  const handleScroll = () => 
  document.scrollingElement.scrollTop > 3000 && !sessionStorage.getItem('showedSubscribePopup') && !localStorage.getItem("subscribed") ?
    setShowPopup(true) : null
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!email.match(validEmail)) return setInvalidEmail(true)
    fetcher.submit({email, post: path, _action: "subscribe"}, {method: 'post', action:'/blog'})
    setDidSubscribe(true)
  }

  useEffect(() => {
    return window.innerWidth < 768 ? setIsPhone(true) : null
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  useEffect(() => {
    if (showPopup) {
      sessionStorage.setItem('showedSubscribePopup', true)
      gsap.from('#popup', {x: '-100%', duration: .5, delay: 2})
      gsap.to('#popup', {opacity: 1, duration: .5, delay: 2})
    }    
  }, [showPopup])

  useEffect(() => {
    if (closePopup) {
      gsap.to('#popup', {x: '-100%', duration: .5})
    }
  }, [closePopup])

  useEffect(() => {
    if (didSubscribe) {
      localStorage.setItem("subscribed", true)
      gsap.to("#envelope", {rotate: 360, duration: .6})
      let timeout = setTimeout(() => setClosePopup(true), 800)

      return () => clearTimeout(timeout)
    }
  }, [didSubscribe])
  
  return showPopup ?
  (
    <div id="popup" className={`fixed opacity-0 bottom-0 left-0 z-50 px-4 py-2 md:p-6 rounded-md font-mont bg-slate-300 ${isPhone ? "w-full" : ""}`}>
      {invalidEmail && 
        <FlashMessage duration={5000} className="absolute p-2 mx-auto -translate-y-1/2 bg-white rounded-md left-4 right-4 top-1/2">
          <p className='font-medium text-center text-red-500'>Please enter a valid email.</p>
        </FlashMessage>
      }
      <img 
        id="envelope"
        className='mx-auto w-14 md:w-20'
        src={emailIcon} alt="email icon" />
      <fetcher.Form method='POST' className='pb-2 mx-auto md:prose md:pb-0'>
        <span className='block text-lg font-bold text-center md:text-2xl whitespace-nowrap'>Subscribe</span>
        <p className='max-w-xs mx-auto mt-1 font-medium text-center md:text-sm md:mt-2'>Sign up to receive email alerts when I release a new post.</p>
        <div className='flex mt-3 md:block md:mt-0'>
          <input
            placeholder='email address'
            className='w-full px-4 py-3 mt-2 text-base rounded md:py-2 md:text-base outline-slate-600' 
            type="email" name="email" id="email" />
          <button 
            type="submit"
            onClick={handleSubmit}
            className='w-1/2 px-2 py-1 mt-2 -ml-2 text-base font-bold rounded-md md:-ml-0 rounded-r-md md:py-2 md:text-xl md:px-0 md:w-full md:mt-4 text-slate-200 bg-slate-900 hover:bg-opacity-90'
          >
            Done
          </button>

        </div>
      </fetcher.Form>
      <button 
        className='absolute top-0 right-0 p-4 rounded-md'
        onClick={() => setClosePopup(true)}
      >
        <CgClose className='text-bg-slate-900 md:text-xl' />
      </button>
    </div>
  ) :
  null
}

export default SubscriblePopup