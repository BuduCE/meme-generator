import React from 'react'
import './styles.css'

const Form = () => {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: ""
    })
    console.log(data)
    const handleChange = (event) => {
        const {name, value, type, checked} = event.target

        setData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
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

        <input type="checkbox" name="isFriendly" id="isFriendly" checked={data.isFriendly} onChange={handleChange}/> <label htmlFor="isFriendly">Are you friendly?</label>
        <br />
        <br />

        <fieldset>
            <legend>Current Employment Status</legend>

            <input type="radio" name="employment" id="unemployed" value="unemployed" /> <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input type="radio" name="employment" id="part-time" value=""/> <label htmlFor="part-time">Part-time</label>
            <br />

            <input type="radio" name="employment" id="full-time" /> <label htmlFor="full-time">Full-time</label>
        </fieldset>
    </form>
  )
}

export default Form