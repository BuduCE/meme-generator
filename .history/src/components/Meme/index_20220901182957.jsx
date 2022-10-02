import React from 'react'
import './styles.css'
// import image from './image.jpg'
import memesData from '../../memesData'

const Meme = () => {
  const [meme, setMeme] = React.useState({
    toptext: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/ibij.jpg',
  })

  const [allMemeImg, setAllMemeImg] = React.useState(memesData)

  const memes = allMemeImg.data.memes
  const randomMeme = Math.floor(Math.random() * memes.length)

  const displayImg =()=>{
      setAllMeme(memes[randomMeme].url)
  }

  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayImg}>Get a new meme image</button>

        <img src={meme.randomImg} alt="" />
    </div>
  )
}

export default Meme