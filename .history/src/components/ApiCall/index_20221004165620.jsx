import React from 'react'

const ApiCall = () => {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    React.useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        // console.log("Effect function ran")
    }, [])
  return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h1>The count is {count}</h1>
        <button onClick={ () => {setCount(prev => prev + 1)}}>Add</button>
    </div>
  )
}

export default ApiCall