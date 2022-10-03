import React from 'react'

const Form = () => {
    const [data, setData] = React.useState("")

    const handleChange = (event) => {
        setData(prev => )
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