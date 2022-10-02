import './App.css';
import Body from './components/Body';
import Count from './components/Count';
// import Generator from './components/Generator';
import Meme from './components/Meme';
import Profile from './components/Profile';
import Title from './components/Title';

function App() {
  const [username, setUsername] = React.useState('John')
  
  return (
    <div className="App">
      <Title />
      <Meme />
      {/* <Count /> */}
      <Profile name={username}/>
      <Body name={name}/>
    </div>
  );
}

export default App;
