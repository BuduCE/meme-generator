import './styles.css'
import image from './image.jpg'
import memesData from '../../memesData'

const Meme = () => {
    // const memes = memesData.map(out => out.data.memes.url)


    const displayUrl =() => {
        console.log(memesData.data.memes.url.random())
    }
  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayUrl}>Get a new meme image</button>

        <img src={image} alt="" />
    </div>
  )
}

export default Meme