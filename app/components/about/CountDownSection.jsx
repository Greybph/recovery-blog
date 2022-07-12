import {useState, useEffect, useCallback} from 'react'
import CountDownCard from './CountDownCard'
import {BsCalendar3} from 'react-icons/bs'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function CountDownSection() {
  const countDownDate = new Date("July 11, 2023 24:00:00").getTime()
  const getTimeLeft = useCallback(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    return { 
      days: days.toString().length < 2 ? `0${days}` : days,
      hours: hours.toString().length < 2 ? `0${hours}` : hours,
      minutes: minutes.toString().length < 2 ? `0${minutes}` : minutes,
      seconds: seconds.toString().length < 2 ? `0${seconds}` : seconds
    }
  }, [countDownDate])
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [showDate, setShowDate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [getTimeLeft])
  
  useEffect(() => {
    if (showDate) {
      const timer = setTimeout(() => setShowDate(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showDate])

  useEffect(() => {
    let wide = window.innerWidth >= 768

    gsap.from('.countdown-card', {
      y: 150,
      opacity: 0,
      stagger: .3,
      scrollTrigger: {
        trigger: '#countdown-container',
        scurb: 1,
        start: wide ? 'top 60%' : 'top 80%'
      }      
    })
    
    gsap.from('#calendar-icon', {
      opacity: 0,
      delay: 1.5,
      scrollTrigger: {
        trigger: '#countdown-container',
        start: wide ? 'top 60%' : 'top 80%'
      }        
    })

    wide &&
    gsap.from('#countdown-section-title', {
      opacity: 0,
      y: 200,
      scrollTrigger: {
        trigger: '#countdown-section-title',
        start: 'top 90%'
      }
    })
  }, [])

  return (
    <section className='flex flex-col items-center justify-between px-4 py-10 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-b from-slate-900 to-slate-600 font-mont'>
      
      <div className='mb-6 md:mb-10'>
        <span id="countdown-section-title" className='block text-xl font-bold tracking-tighter text-center text-white md:text-4xl lg:text-4xl'>Countdown to 5 Years Clean</span>
      </div>

      <div id="countdown-container" className='flex items-center space-x-4 text-white md:space-x-8 lg:space-x-10'>
        <CountDownCard time={timeLeft.days} label="days" />
        <CountDownCard time={timeLeft.hours} label="hours" />
        <CountDownCard time={timeLeft.minutes} label="minutes" />
        <CountDownCard time={timeLeft.seconds} label="seconds" />
      </div>

      <div className='h-10 mt-6 -mb-2 md:mt-10 md:-mb-10'>
        {showDate ? 
          <span className='text-white'>Clean Date: 7-11-2018</span>
          :
          <BsCalendar3
            id="calendar-icon"
            onClick={() => setShowDate(true)} 
            className='text-lg text-white duration-300 cursor-pointer md:text-3xl opacity-80 hover:opacity-100'/>
        }
      </div>
    </section>
  )
}

export default CountDownSection