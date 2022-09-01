import React from 'react'
import './styles.css'
import empty from './star-empty.png'
import filled from 

const Generator = () => {
    const thingsArray = {
        firstName : 'John',
        lastName: 'Doe',
        phone: '(+234) 70 1732 0766',
        email: 'oladejiabdullah17@gmail.com',
        isFavorite: false,
    }

    `true` = './star-empty.png'
    `false` = './star-filled.png'

    const [obj, setObj] = React.useState(thingsArray)

  return (
    <div className='card'>
        <h2 className='user-name'>
            {obj.firstName} {obj.lastName}
        </h2>
        <p className='contact'>{obj.phone}</p>
        <p className='email'>{obj.email}</p>
    </div>
  )
}

export default Generator