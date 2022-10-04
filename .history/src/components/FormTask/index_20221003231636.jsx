import React from 'react'
import './styles.css'

const FormTask = () => {
    const [data, setData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        isJoin: false
    })

    const handleChanges = (event) => {
        const [name,type,checked,value] = event.target

        setData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    // const handleSubmits = (event) => {
    //     event.preventDefault()
    //     console.log(data)
    // }

  return (
    <div className='form-container'>
        <form className="form" >
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                onChange={handleChanges}
                value={data.email}
            />
            <input 
                type="text" 
                placeholder="Password"
                className="form--input"
                name="password"
                onChange={handleChanges}
                value={data.password}
            />
            <input 
                type="text" 
                placeholder="confirm password"
                className="form--input"
                name="confirmPassword"
                onChange={handleChanges}
                value={data.confirmPassword}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="isJoin"
                    onChange={handleChanges}
                    checked={data.isJoin}
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