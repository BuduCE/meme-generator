import React from 'react'

const star = () => {
    let starIcon = contact.isRated ? {filledStar} : {emptyStar}
    
  return (
    <img
    src={`./${starIcon}`} onclick={toggleRated}
    />
  )
}

export default star