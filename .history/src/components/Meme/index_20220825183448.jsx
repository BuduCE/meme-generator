import './styles.css'
import image from './image.jpg'
import memesData from '../../memesData'

const Meme = () => {
    // const displayUrl =()=>{
    //     const memes = memesData.data.memes
    //     const urlLen = Math.floor(Math.random() * memes.length)
    //     const urlAddress = memes[urlLen].url
    //     alert(urlAddress)
    // }

    const thingsArray = ['Thing 1', 'Thing 2']
    const thing =thingsArray.map(dThing =}


  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn'>Get a new meme image</button>


        <img src={image} alt="" />
    </div>
  )
}

export default Meme