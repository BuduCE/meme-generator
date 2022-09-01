import React from 'react'
import './styles.css'

const Generator = () => {
    const [count, setCount] = React.useState(0)
    //Callback function
    const minus = () => {
        setCount(newMinus => newMinus -1)
    }
    //Callback function is used here
    const plus = () => {
        setCount(newPlus => newPlus + 1)
    }
    //Ternary operator
    const isGoingOut = true
    
    const change = (try) => isGoingOut ? false : true
    

  return (
    <div className='counter'>
        <button className='counter--minus' onClick={minus}>-</button>
        <div className="counter-count">
            <h1>{count}</h1>
        </div>
        <button className='counter--plus' onClick={plus}>+</button>

        <div className="state-value" onClick={change}>
            <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
        </div>
    </div>
  )
}

export default Generator