import {useEffect, useState} from 'react'

function FlashMessage({children, duration, className}) {
  const [showMessage, setShowMessage] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setShowMessage(false), duration)
  }, [duration])

  if (showMessage) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  } else {
    return null
  }
}

export default FlashMessage