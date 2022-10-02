import React from 'react'

const Profile = () => {
    const [contact, setContact] = React.useState({
        firstname: "John",
        lastName: "Doe",
        phone: "+234 70 1732 0766",
        email: "oladejiabdullah17@gmail"
    })
  return (
    <div>
        <img src="" alt="" />
        <div className="profile_info">
            <img src="" alt="" />

            <h1>John Doe</h1>

            <p>+234 70 1732 0766</p>
            <small>oladejiabdullah17@gmail.com</small>
        </div>  
    </div>
  )
}

export default Profile