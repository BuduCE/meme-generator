import React from 'react'
import user from './user.png'
// import Star from '../Star'
import filledStar from './filled_star.png'
import emptyStar from './emptyStar.png'

const Profile = () => {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+234 70 1732 0766",
        email: "oladejiabdullah17@gmail.com",
        isRated: true
    })

    const starIcon = contact.isRated ? <img{filledStar} : {emptyStar}
    


  return (
    <div>
        <img src={user} alt="card" />
        <div className="profile_info">
            {starIcon}

            {/* <Star /> */}
            {/* isRated={contact.filledStar} */}
            

            <h1>{contact.firstName} {contact.lastName}</h1>

            <p>{contact.phone}</p>
            <small>{contact.email}</small>
        </div>  
    </div>
  )
}

export default Profile