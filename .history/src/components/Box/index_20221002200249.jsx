import React from 'react'
import './styles.css'

const Box = (props) => {
    const [boxSwitch, setBoxSwitch] = React.useState(props.status)

    const setSquaress = () =>{
        setBoxSwitch(prevStatus => ({
          ...prevStatus,
          on: !prevStatus.on
        }))
      }

    const styless = {
        backgroundColor: boxSwitch ? "#000" : "transparent"
    }

  return (
    <div style={styless} className="box" onClick={setSquares}>
    </div>
  )
}

export default Box