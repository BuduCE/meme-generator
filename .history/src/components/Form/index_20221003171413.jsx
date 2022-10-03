import React from 'react'
import './styl'

const Form = () => {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: ""
    })
    console.log(data)
    const handleChange = (event) => {
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
  return (
    <form>
        <input type="text" placeholder='First Name' 
        onChange={handleChange} name="firstName" value={data.firstName}
        />

        <input type="text" placeholder='Last Name' 
        onChange={handleChange} name="lastName" value={data.lastName}
        />

        <input type="email" placeholder='email' 
        onChange={handleChange} name="email" value={data.email}
        />

        <textarea placeholder='comments' onChange={handleChange} name="comments" value={data.comments} />
    </form>
  )
}

export default Form