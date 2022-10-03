import React from 'react'

const Form = () => {
    const [data, setData] = React.useState("")

    const handleChange = () => {
        console.log
    }
  return (
    <form>
        <input type="text" placeholder='First Name' />
    </form>
  )
}

export default Form