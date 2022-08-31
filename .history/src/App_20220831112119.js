import './App.css';
import Meme from './components/Meme';
import Title from './components/Title';
import memesData from './memesData'

function App() {
  
  return (
    <div className="App">
      <Title />
      <Meme />
    </div>
  );
}

export default App;
