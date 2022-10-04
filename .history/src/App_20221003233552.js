import React from 'react'
import './App.css';
// import Body from './components/Body';
// import Count from './components/Count';
import Form from './components/Form';
import FormTask from './components/FormTask';
import JokeParent from './components/JokeParent';
// import Generator from './components/Generator';
import Meme from './components/Meme';
// import Profile from './components/Profile';
import Title from './components/Title';
import Unread from './components/Unread';

function App() {
  // const [username, setUsername] = React.useState('John')
  
  return (
    <div className="App">
      <Title />
      <Meme />
      <JokeParent />
      <Unread />
      <Form />
      <FormTask />
      {/* <Count /> */}
      {/* <Profile name={username}/>
      <Body name={username}/> */}
    </div>
  );
}

export default App;
