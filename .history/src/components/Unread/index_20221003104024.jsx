import React from 'react'

const Unread = () => {
    const [message, setMessages] = React.useState(['a'])
  return (
    <div>
        <h1>You have _ unread messages!</h1>
    </div>
  )
}

export default Unread