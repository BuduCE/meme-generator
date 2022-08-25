import React from 'react'
import TrollFace from './TrollFace.svg'

const Title = () => {
  return (
    <div className='Title'>
        <img src={TrollFace} alt="" />
        <h2>Meme Generator</h2>
    </div>
  )
}

export default Title