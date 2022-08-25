import './styles'

const Meme = () => {
  return (
    <form>
        <div className="meme-txt"></div>
        <input type="text" placeholder='Shut up'/>
        <input type="text" placeholder='and take my money'/>
        <button>Get a new meme image</button>
    </form>
  )
}

export default Meme