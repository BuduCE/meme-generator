import './styles.css'
import image from './'

const Meme = () => {
    const handleClick = () => {
        alert('I was clicked')
    }
  return (
    <form>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={handleClick}>Get a new meme image</button>
    </form>
  )
}

export default Meme