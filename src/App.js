import LessText from './LessText';
import Back from './Back.jsx';
import Burger from './Burger.jsx';
import Test from './Test.jsx';
import Todo from './Todo/Todo.jsx';
import Resume from './Resume/Resume';
import Card from './Card/Card.jsx';
import Test_2 from './Test_2/Test_2.jsx';
import Spy_game from './Spy_game/Spy_game.jsx';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';



function App() {
  return (
    <div className='app'>
      <Spy_game />
    </div>
  )
}

export default App;