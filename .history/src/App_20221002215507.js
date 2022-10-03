import React from 'react'
import './App.css';
import Body from './components/Body';
import Count from './components/Count';
import JokeParent from './components/JokeParent';
// import Generator from './components/Generator';
import Meme from './components/Meme';
import Profile from './components/Profile';
import Title from './components/Title';

function App() {
  // const [username, setUsername] = React.useState('John')
  
  return (
    <div className="App">
      <Title />
      <Meme />
      <JokeParent
      {/* <Count /> */}
      {/* <Profile name={username}/>
      <Body name={username}/> */}
    </div>
  );
}

export default App;
