import React from 'react'
import './styles.css'

const Generator = () => {
    const [count, setCount] = 0
    const minus = () 
    const countAction = () =>{

    }
    
  return (
    <div className='counter'>
        <button className='counter--minus' onClick={minus}>-</button>
        <div className="counter-count">
            <h1>{count}</h1>
        </div>
        <button className='counter--plus' onClick={plus}>+</button>
    </div>
  )
}

export default Generator