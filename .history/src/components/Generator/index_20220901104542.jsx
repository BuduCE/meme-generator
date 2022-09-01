import React from 'react'
import './styles.css'

const Generator = () => {
    const thingsArray = {
        firstName : 'John',
        lastName: 'Doe',
        phone: (+234) 7017320766
    }

    const [Array, setArray] = React.useState(thingsArray)

  return (
    <div className='counter'>

    </div>
  )
}

export default Generator