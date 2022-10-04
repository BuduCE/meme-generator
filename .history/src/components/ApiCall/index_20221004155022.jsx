import React from 'react'

const ApiCall = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <h1>The count is {count}</h1>
        <button onClick={ () => {setCount()}}>Add</button>
    </div>
  )
}

export default ApiCall