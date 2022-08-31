import './styles.css'

const Meme = () => {
  return (
    <form>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={}>Get a new meme image</button>
    </form>
  )
}

export default Meme