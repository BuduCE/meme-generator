import React from 'react'
import './styles.css'

const Generator = () => {
    const thingsArray = {
        firstName : 'John',
        lastName: 'Doe',
        phone: '(+234) 70 1732 0766',
        email: 'oladejiabdullah17@gmail.com',
        isFavorite: false,
    }

    const [obj, setObj] = React.useState(thingsArray)

    const thingObj =()  => {

    }

  return (
    <div className='card'>
        
    </div>
  )
}

export default Generator