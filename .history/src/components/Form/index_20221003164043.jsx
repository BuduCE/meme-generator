import React from 'react'

const Form = () => {
    const [data, setData] = React.useState("")

    const handleChange = (event) => {
        setData(event.target.value)
        console.log(data)
    }
  return (
    <form>
        <input type="text" placeholder='First Name' 
        onChange={handleChange}
        />

        <input type="text" placeholder='Last Name' 
        onChange={handleLastNaChange}
        />
    </form>
  )
}

export default Form