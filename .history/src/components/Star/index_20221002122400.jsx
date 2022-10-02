import React from 'react'
import './style.css'
import filledStar from './filled_star.png'
import emptyStar from './emptyStar.png'

const star = (props) => {
    let starIcon = props.isFavorite ? filledStar : emptyStar

  return (
    <img
    src={starIcon} className="starRate" onClick={}
    />
  )
}

export default star