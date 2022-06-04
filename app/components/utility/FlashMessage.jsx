import {useEffect, useState} from 'react'

function FlashMessage({children, duration}) {
  const [showMessage, setShowMessage] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setShowMessage(false), duration)
  }, [duration])

  if (showMessage) {
    return (
      <div>
        {children}
      </div>
    )
  } else {
    return null
  }
}

export default FlashMessage