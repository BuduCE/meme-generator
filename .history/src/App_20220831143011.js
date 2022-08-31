import './App.css';
import Generator from './components/Generator';
import Meme from './components/Meme';
import Title from './components/Title';

function App() {
  
  return (
    <div className="App">
      <Title />
      <Meme />
      <Generator />
    </div>
  );
}

export default App;
