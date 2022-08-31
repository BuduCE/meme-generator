import './styles.css'
import image from './image.jpg'
// import memesData from '../../memesData'

const Meme = () => {
    // const displayUrl =()=>{
    //     const memes = memesData.data.memes
    //     const urlLen = Math.floor(Math.random() * memes.length)
    //     const urlAddress = memes[urlLen].url
    //     alert(urlAddress)
    // }

    const thingsArray = ['Thing 1', 'Thing 2']

    const displayThings = () => {
        const newText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newText)
        console.log(thingsArray)
    }

    const thingsElement = thingsArray.map( thing => <p key={thing}>{thingsArray}</p>)

    const result = React.useState('Hello')
    const toBeDisplayed = result.map(toBe => <p key={toBe}>{result}</p>)
  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayThings}>Get a new meme image</button>

        {thingsElement}

        {toBeDisplayed}

        <img src={image} alt="" />
    </div>
  )
}

export default Meme