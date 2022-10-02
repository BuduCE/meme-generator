import React from 'react'
import './App.css';
import Body from './components/Body';
import Count from './components/Count';
// import Generator from './components/Generator';
import Meme from './components/Meme';
import Profile from './components/Profile';
import Title from './components/Title';

function App(props) {
  const [username, setUsername] = React.useState('John')

  props.darkMode
  
  return (
    <div className="App">
      <Title />
      <Meme />
      {/* <Count /> */}
      <Profile name={username}/>
      <Body name={username} darkMode={true}/>
    </div>
  );
}

export default App;
