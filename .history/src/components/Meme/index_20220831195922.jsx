import React from 'react'
import './styles.css'
import image from './image.jpg'
import memesData from '../../memesData'

const Meme = () => {

    const [memeImg, setMemeImg] = React.useState()

    const displayImg =()=>{
        const memes = memesData.data.memes
        const urlLen = Math.floor(Math.random() * memes.length)
        const urlAddress = memes[urlLen].url
        alert(urlAddress)
    }

    const result = React.useState('Hello')

  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayImg}>Get a new meme image</button>

        {result[0]}

        {/* {isImportant}         */}

        <img src={image} alt="" />
    </div>
  )
}

export default Meme