import React from 'react'
import './styles.css'

const Generator = () => {
    const thingsArray = {
        firstName : 'John'
    }

    const [Array, setArray] = React.useState(thingsArray)

  return (
    <div className='counter'>

    </div>
  )
}

export default Generator