import React from 'react'
import './styles.css'

const Form = () => {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true
    })
    // console.log(data)
    const handleChange = (event) => {
        const {name, value, type, checked} = event.target

        setData(prev => {
            return {
                ...prev,
                [name]: {event.target.value
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

        <input type="checkbox" name="" id="isFriendly" checked={data.isFriendly}/>
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
    </form>
  )
}

export default Form