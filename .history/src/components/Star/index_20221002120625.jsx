import React from 'react'


const star = (props) => {
    let starIcon = props.isRated ? filledStar : emptyStar

  return (
    <img
    src={starIcon}
    />
  )
}

export default star