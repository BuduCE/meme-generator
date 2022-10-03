import React from 'react'
import jokeData from '../../jokeData'
import Jokes from '../Jokes'

const JokeParent = () => {
    const line = jokeData.map(jokeLine => {
        return (
            <Jokes 
                key={jokeLine.id}
                setup={jokeLine.setup}
                punchline={joke}
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