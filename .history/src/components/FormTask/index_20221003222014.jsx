import React from 'react'
import './styles.css'

const FormTask = () => {
    const [data, setData] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data)
    }
  return (
    <div className='form-container'>
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name=''
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
  )
}

export default FormTask