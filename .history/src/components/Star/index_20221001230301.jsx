import React from 'react'

const star = () => {
    let starIcon = props.isRated ? {filledStar} : {emptyStar}

  return (
    <img
    src={`./${starIcon}`} onclick={toggleRated}
    />
  )
}

export default star