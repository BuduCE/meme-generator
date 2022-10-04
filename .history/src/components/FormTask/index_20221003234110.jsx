import React from 'react'
import './styles.css'

const FormTask = () => {
    const [daata, setData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        isJoin: true
    })

    const handleChanges = (event) => {
        const {name,type,checked,value} = event.target

        setData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })

        {daata.password === daata.confirmPassword ? alert("Password set") : }
    }

    const handleSubmits = (event) => {
        event.preventDefault()
        console.log(daata)
    }

  return (
    <div className='form-container'>
        <form className="form" onSubmit={handleSubmits}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={handleChanges}
                value={daata.email}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChanges}
                value={daata.password}
            />
            <input 
                type="password" 
                placeholder="confirm password"
                className="form--input"
                name="confirmPassword"
                onChange={handleChanges}
                value={daata.confirmPassword}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="isJoin"
                    onChange={handleChanges}
                    checked={daata.isJoin}
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