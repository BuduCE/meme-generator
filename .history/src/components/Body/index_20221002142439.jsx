import React from 'react'
import './styles.css'
import boxData from '../../boxes'

const Body = (props) => {
    const [squares, setSquares] = React.useState(boxData)

    const boxDisplay = squares.map(box =>( <div key={box.id} className="box"></div>
        )})
  return (
    <div>
        <h1>Welcome back,{props.name} </h1>

        <div>
            {boxDisplay}
        </div>
    </div>
  )
}

export default Body