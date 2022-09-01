import React from 'react'
import './styles.css'

const Generator = () => {
    // const [count, setCount] = React.useState(0)
    // //Callback function
    // const minus = () => {
    //     setCount(newMinus => newMinus -1)
    // }
    // //Callback function is used here
    // const plus = () => {
    //     setCount(newPlus => newPlus + 1)
    // }
    //Ternary operator
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    const change = () => setIsGoingOut(prevState => !prevState)

    const thingsArray = ["Thing 1", "Thing 2"]

    const [Array, setArray] = React.useState(thingsArray)

  return (
    <div className='counter'>

    </div>
  )
}

export default Generator