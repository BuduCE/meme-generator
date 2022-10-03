import React from 'react'

const Jokes = (props) => {
    props.punchline = false

    const [isShown, setIsShown] = React.useState(false)

    const toggle = () => {
        setIsShown => (prev => true)
    }

  return (
    <div>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        <button onClick={toggle}>Show Punchline</button>
        <hr/>
    </div>
  )
}

export default Jokes