import React from 'react'
import './styles.css'
// import image from './image.jpg'
import memesData from '../../memesData'
import Count from '../Count'


const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImg: 'https://images.unsplash.com/photo-1661347333339-51786af3b406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  })

  const [allMemeImg, setAllMemeImg] = React.useState(memesData)

  const memes = allMemeImg.data.memes
  const randomMeme = Math.floor(Math.random() * memes.length)
  const url = memes[randomMeme].url

  const displayImg =(number)=>{
      setMeme(prevMeme => ({
        ...prevMeme,
        randomImg: url,
      }))
  }

  const [count, setCount] = React.useState(0)
  const countMinus = () => {
    setCount(minus => minus - 1)
  }
  const countPlus = () => {
    setCount(plus => plus + 1)
  }

  return (
    <main>
      <div className='form'>
          <input type="text" placeholder='Shut up' name='topText' value={meme.topText}className='meme-input'/>

          <input type="text" placeholder='and take my money' name='bottomText' value={meme.bottomText} className='meme-input'/>

          <button className='meme-btn' onClick={displayImg}>Get a new meme image</button>
      </div>

      <div className='meme'>
          <img src={meme.randomImg} alt="" className='meme-img'/>
          <h2 className="meme--text top">One does not simply</h2>
          <h2 className="meme--text bottom">Walk into Mordor</h2>
      </div>


      {/* Counter */}
      <div className="cart-count">
        <button className="count-minus" onClick={countMinus}> - </button>

        <Count number={count} />

        <button className="count-plus" onClick={countPlus}> + </button>
      </div>
    </main>
  )
}

export default Meme