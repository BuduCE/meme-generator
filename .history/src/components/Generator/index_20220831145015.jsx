import React from 'react'
import './styles.css'

const Generator = () => {
    const [count, setCount] = 0
    
    
  return (
    <div className='counter'>
        <button className='counter--minus' onClick={}>-</button>
        <div className="counter-count">
            <h1>{count}</h1>
        </div>
        <button className='counter--plus'>+</button>
    </div>
  )
}

export default Generator