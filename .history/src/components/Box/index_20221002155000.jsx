import React from 'react'
import './styles.css'

const Box = (props) => {

    console.log(props.status)
    // const styles = {
    //     backgroudColor: props.status ? "#000" : "none"
    // }
  return (
    <div style={styles} className="box">
    </div>
  )
}

export default Box