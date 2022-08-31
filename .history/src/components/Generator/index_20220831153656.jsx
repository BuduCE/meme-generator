import React from 'react'
import './styles.css'

const Generator = () => {
    const [count, setCount] = React.useState(0)
    //Callbac function
    const minus = () => {
        setCount(newMinus => newMinus -1)
    }
    //Callback function is usd here
    const plus = () => {
        setCount(newPlus => newPlus + 1)
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