import React from 'react'
import './styles.css'
// import image from './image.jpg'
import memesData from '../../memesData'

const Meme = () => {
  const [meme, setMeme] = React.useState({
    toptext: '',
    bottomText: '',
    randomImg: 'https://images.unsplash.com/photo-1661347333339-51786af3b406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  })

  const [allMemeImg, setAllMemeImg] = React.useState(memesData)

  const memes = allMemeImg.data.memes
  const randomMeme = Math.floor(Math.random() * memes.length)
  const url = memes[randomMeme].url

  const displayImg =()=>{
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImg: url,
      }))
  }

  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayImg}>Get a new meme image</button>

        <img src={meme.randomImg} alt="" />

        <div className="cart-count">
          <button className="count-minus">-</button>
          <h2>{count}</h2>
          <button className="count-plus"></button>
        </div>
    </div>
  )
}

export default Meme