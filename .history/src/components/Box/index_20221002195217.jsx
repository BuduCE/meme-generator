import React from 'react'
import './styles.css'

const Box = (props) => {
    const box

    const styless = {
        backgroundColor: props.status ? "#000" : "transparent"
    }

  return (
    <div style={styless} className="box">
    </div>
  )
}

export default Box