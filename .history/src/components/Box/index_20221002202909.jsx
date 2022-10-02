import React from 'react'
import './styles.css'

const Box = (props) => {
    // const [boxSwitch, setBoxSwitch] = React.useState(props.status)

    // const setSquaress = () =>{
    //     setBoxSwitch(prevStatus => !prevStatus)
    //   }

    const styless = {
        backgroundColor: props.status ? "#000" : "transparent"
    }

  return (
    <div style={styless} className="box" onClick=>{props.handleClick()}>
    </div>
  )
}

export default Box