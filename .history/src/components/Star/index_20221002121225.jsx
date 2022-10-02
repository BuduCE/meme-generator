import React from 'react'
import filledStar from './filled_star.png'
import emptyStar from './emptyStar.png'

const star = (props) => {
    let starIcon = props.isFavorite ? filledStar : emptyStar

  return (
    <img
    src={starIcon} classNam
    />
  )
}

export default star