import React from 'react'
import './styles.css'
import boxData from '../../boxes'

const Body = (props) => {
    const boxDisplay = boxData.map(box => {
        return
        {...box}
    })
  return (
    <div>
        <h1>Welcome back,{props.name} </h1>

        <div className="box">
            {boxDisplay}
        </div>
    </div>
  )
}

export default Body