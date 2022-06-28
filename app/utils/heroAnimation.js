import {gsap} from 'gsap'

export default function heroAnimation(titles, para = null) { 
  gsap.from(titles, {
    scale: .94,
    duration: .35
  })
  gsap.to(titles, {
    opacity: 1,
    duration: .35
  })

  if (para) {
    gsap.from(para, {
      x: Math.random() > 0.5 ? -30 : 30,
      duration: .25,
      delay: .1
    })
    gsap.to(para, {
      opacity: 1,
      duration: .35,
      delay: .2
    })
  }

}