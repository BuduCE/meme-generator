import React from 'react'

const Jokes = (props) => {
  return (
    <div>
        <h3>{props.setup}</h3>
        <p>{props.punchline}</p>
    </div>
  )
}

export default Jokes