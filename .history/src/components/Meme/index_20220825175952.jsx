import './styles.css'
import image from './image.jpg'
import memesData from '../'

const Meme = () => {
    const handleClick = () => {
        alert('I was clicked')
    }
    const handleOver = () => {
        alert('Mouse over')
    }
  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={handleClick}>Get a new meme image</button>

        <img src={image} alt="" onMouseOver={handleOver}/>
    </div>
  )
}

export default Meme