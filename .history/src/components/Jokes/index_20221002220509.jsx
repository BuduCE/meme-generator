import React from 'react'

const Jokes = (props) => {
  return (
    <div>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
        <button>show</button>
        <hr/>
    </div>
  )
}

export default Jokes