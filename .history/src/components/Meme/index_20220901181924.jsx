import React from 'react'
import './styles.css'
// import image from './image.jpg'
import memesData from '../../memesData'

const Meme = () => {
  const memes = memesData.data.memes
  const randomMeme = Math.floor(Math.random() * memes.length)
  const [memeImg, setMemeImg] = React.useState({toptext: '', bottomText: '', randomImg: 'https://i.imgflip.com/ibij.jpg',})

  const displayImg =()=>{
      setMemeImg(memes[randomMeme].url)
  }

  const allMemeImages = 

  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayImg}>Get a new meme image</button>

        <img src={memeImg} alt="" />
    </div>
  )
}

export default Meme