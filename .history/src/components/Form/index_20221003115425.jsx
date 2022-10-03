import React from 'react'

const Form = () => {
    const [data, setData] = React.useState("")

    const handleChange = () => {
        console.log("changed")
    }
  return (
    <form>
        <input type="text" placeholder='First Name' 
        onChange={handleChange}
        />
    </form>
  )
}

export default Form