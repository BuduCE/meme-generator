import React from 'react'

const Jokes = (props) => {
    const [isShown, setIsShown] = React.useState(false)

    const toggle = () => {
        setIsShown(prev => !prev)
    }

  return (
    <div>
        <h3>{props.setup}</h3>
        {isShown  <p>{props.punchline}</p>}
        <button onClick={toggle}>Show Punchline</button>
        <hr/>
    </div>
  )
}

export default Jokes