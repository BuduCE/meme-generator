import React from 'react'

const Form = () => {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: ""
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
        onChange={handleChange} name="firstName"
        />

        <input type="text" placeholder='Last Name' 
        onChange={handleChange} name="lastName"
        />

        
    </form>
  )
}

export default Form