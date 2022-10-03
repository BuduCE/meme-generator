import React from 'react'

const Unread = () => {
    const [message, setMessage] = React.useState([])

    const showConsole = message.length
    // const show = () => {
    //     console.log(showConsole)
    // }
  return (
    <div>
        {showConsole > 0 &&<h1>You have {showConsole} unread messages!</h1>}
        {/* <h1 onClick={show}>You have unread messages!</h1> */}
    </div>
  )
}

export default Unread