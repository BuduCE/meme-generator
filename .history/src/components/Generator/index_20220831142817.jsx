import React from 'react'

const Generator = () => {
  return (
    <div className='counter'>
        <button className='counter--plus'>-</button>
        <div className="counter-count">
            <h1>0</h1>
        </div>
        <button className='counter--plus'>+</button>
    </div>
  )
}

export default Generator