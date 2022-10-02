import React from 'react'
import filledStar from './filled_star.png'
import emptyStar from './emptyStar.png'

const star = (props) => {
    let starIcon = <props className="isFavor"></props>ite ? filledStar : emptyStar

  return (
    <img
    src={starIcon}
    />
  )
}

export default star