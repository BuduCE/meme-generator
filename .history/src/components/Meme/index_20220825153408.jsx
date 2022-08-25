import './styles'

const Meme = () => {
  return (
    <form>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up'/>
            <input type="text" placeholder='and take my money'/>           
        </div>
        
        <button>Get a new meme image</button>
    </form>
  )
}

export default Meme