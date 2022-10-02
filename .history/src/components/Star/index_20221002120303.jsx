import React from 'react'

const star = (props) => {
    let starIcon = props.isRated ? {propsfilledStar} : {emptyStar}

  return (
    <img
    src={starIcon}
    />
  )
}

export default star