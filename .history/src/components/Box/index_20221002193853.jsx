import React from 'react'
import './styles.css'

const Box = (props) => {

    // console.log(props.status)

    const styless = {
        backgroudColor: props.status ? "#000000" : "#222222"
    }

  return (
    <div style={styless} className="box">
    </div>
  )
}

export default Box