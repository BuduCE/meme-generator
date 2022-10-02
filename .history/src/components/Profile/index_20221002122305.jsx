import React from 'react'
import user from './user.png'
import Star from '../Star'

const Profile = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+234 70 1732 0766",
        email: "oladejiabdullah17@gmail.com",
        isRated: false
    })

    const toggleFavorite = () => {
        setContact(prevContact => ({
            ...prevContact,
            isRated: !
        }))
    }

  return (
    <div>
        <img src={user} alt="card" />
        <div className="profile_info">

            <Star isFavorite={contact.isRated} />
            

            <h1>{contact.firstName} {contact.lastName}</h1>

            <p>{contact.phone}</p>
            <small>{contact.email}</small>
        </div>  
    </div>
  )
}

export default Profile