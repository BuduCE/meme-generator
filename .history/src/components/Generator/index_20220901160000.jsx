import React from 'react'
import './styles.css'
import empty from './star-empty.png'
import filled from './star-filled.png'

const Generator = () => {
    const thingsArray = {
        firstName : 'John',
        lastName: 'Doe',
        phone: '(+234) 70 1732 0766',
        email: 'oladejiabdullah17@gmail.com',
        isFavorite: true,
    }

    const [obj, setObj] = React.useState(thingsArray)

    const forImg = obj.isFavorite ? filled : empty

    const toggleFavorite = () => (
        setObj (prevObj => {
            return pre =!prevObj.isFavorite
        })
    )

  return (
    <div className='card'>
        <h2 className='user-name'>
            {obj.firstName} {obj.lastName}
        </h2>
        <p className='contact'>{obj.phone}</p>
        <p className='email'>{obj.email}</p>
        <img src={forImg}  onClick={toggleFavorite} alt="" />
    </div>
  )
}

export default Generator