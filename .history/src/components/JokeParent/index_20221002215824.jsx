import React from 'react'
import jokeData from '../../jokeData'
import Jokes from '../Jokes'

const JokeParent = () => {
    const line = jokeData.map(jokeLine => {
        return (
            <Jokes 
            />
        )
    })

  return (
    <div>
        {line}
    </div>
  )
}

export default JokeParent