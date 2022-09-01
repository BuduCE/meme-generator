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

  return (
    <div className='card'>
        <h2 className='user-name'>
            {obj.firstName} {obj.lastName}
        </h2>
        <p className='contact'>{obj.PHONE}</p>
        <p className='email'>{obj.email}</p>
    </div>
  )
}

export default Generator