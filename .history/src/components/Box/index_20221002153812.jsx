import React from 'react'
import './styles.css'

const Box = (props) => {

    const styles = {
        backgroudColor: props.status ? "#222" : "none"
    }
  return (
    <div className="box">
    </div>
  )
}

export default Box