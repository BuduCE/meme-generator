import React from 'react'
import './styles.css'

const Box = (props) => {

    const styles = {
        backgroudColor: props.status ? "#000" : "none"
    }
  return (
    <div style={styles} className="box">
    </div>
  )
}

export default Box