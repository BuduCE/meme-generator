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

    // const [obj, setObj] = React.useState(thingsArray)

    // console.log(obj)
    // const thingObj = obj.map(setObj => {

    // } 
        )

  return (
    <div className='card'>
        <h2 className='user-name'></h2>
        <p className='contact'></p>
        <p className='email'></p>
    </div>
  )
}

export default Generator