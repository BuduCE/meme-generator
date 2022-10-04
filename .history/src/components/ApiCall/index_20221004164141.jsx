import React from 'react'

const ApiCall = () => {
    const [count, setCount] = React.useState(0)

    console.log("Component rendered")

    React.useEffect(()=>{
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => console.log(data))
        console.log("Effect function ran")
    }, [count])
  return (
    <div>
        <h1>The count is {count}</h1>
        <button onClick={ () => {setCount(prev => prev++)}}>Add</button>
    </div>
  )
}

export default ApiCall