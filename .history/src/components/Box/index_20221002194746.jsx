import React from 'react'
import './styles.css'

const Box = (props) => {

    // console.log(props.status)

    const styless = {
        backgroundColor: props.status ? "#000" : "#222"
    }

  return (
    <div style={styless} className="box">
    </div>
  )
}

export default Box