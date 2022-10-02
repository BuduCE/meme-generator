import React from 'react'
import user from './user.png'
import 
const Profile = () => {
    const [contact, setContact] = React.useState({
        firstname: "John",
        lastName: "Doe",
        phone: "+234 70 1732 0766",
        email: "oladejiabdullah17@gmail.com",
        isRated: false
    })

    let starIcon = contact.isRated ? "filled_star.png" : "emptyStar.png"


  return (
    <div>
        <img src={user} alt="card --image" />
        <div className="profile_info">
            <img src={starIcon} alt="" />

            <h1>{contact.firstname}</h1>

            <p>{contact.phone}</p>
            <small>{contact.email}</small>
        </div>  
    </div>
  )
}

export default Profile