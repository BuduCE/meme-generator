import React from 'react'
import './styles.css'
import boxData from '../../boxes'
import { buildQueries } from '@testing-library/react'

const Body = (props) => {
    const [squares, setSquares] = React.useState(boxData)

    const boxDisplay = squares.map(box =>(
        <div style key={box.id} className="box"></div>
    ))

    const styles = {
        backgroundColor: "blue"
    }
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