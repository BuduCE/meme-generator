import React from 'react'
import './styles.css'
import boxData from '../../boxes'
import Box from '../Box'
// import { buildQueries } from '@testing-library/react'

const Body = (props) => {
    const [squares, setSquares] = React.useState(boxData)

    const toggle = () => {
      console.log("clicked")
    }


    const boxDisplay = squares.map(box =>(
        <Box key={box.id} id= status={box.on} handleClick={toggle}/>
    ))
  return (
    <div>
        <h1>Welcome back,{props.name} </h1>

        <div className="box-wrapper">
        {boxDisplay}
        </div>
    </div>
  )
}

export default Body