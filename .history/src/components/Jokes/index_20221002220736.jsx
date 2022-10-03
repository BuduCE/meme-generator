import React from 'react'

const Jokes = (props) => {
    const isShown = {props.punchline}
    const toggle = () => {

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