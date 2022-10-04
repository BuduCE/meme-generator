import React from 'react'
import './styles.css'

const FormTask = () => {
    const [data, setData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        isJoin: false
    })

    const handleChange = (event) => {
        const [name,type,checked,value] = event.target

        setData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

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
                name="email"
                onChange={handleChange}
                value={data.email}
            />
            <input 
                type="text" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChange}
                value={data.password}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="isJoin"
                    onChange={handleChange}
                    value={data.isJoin}
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