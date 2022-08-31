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
    let num = 2 
    const thing = 'Thing' + num


    const displayThings = thingsArray.map(newT => {
        num = num++ 
        let li = document.createElement('Thing ' + num)
        li.
        thingsArray.append(thing)
        console.log(thingsArray)
    }


  return (
    <div className='form'>
        <div className="meme-txt">
            <input type="text" placeholder='Shut up' className='meme-input'/>
            <input type="text" placeholder='and take my money' className='meme-input'/>           
        </div>
        
        <button className='meme-btn' onClick={displayThings}>Get a new meme image</button>

        <img src={image} alt="" />
    </div>
  )
}

export default Meme