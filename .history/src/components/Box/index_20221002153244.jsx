import React from 'react'
import './styles.css'

const Box = (props) => {

    const props.styles = {
        backgroudColor: props.status ? "#222" : "ccc"
    }
  return (
    <div style={styles}>

    </div>
  )
}

export default Box