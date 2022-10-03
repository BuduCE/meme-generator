import React from 'react'

const Form = () => {
    const [data, setData] = React.useState("")

    const handleChange = () => {
        console.log("changed")
    }
  return (
    <form>
        <input type="text" placeholder='First Name' 
        onChange={handlecc}
        />
    </form>
  )
}

export default Form