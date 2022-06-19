import './App.scss';
import LessText from './LessText';
import Back from './Back.jsx';
import Burger from './Burger.jsx';
import Test from './Test.jsx';
import Card from './Card.jsx';
import Result from './Card.jsx';
import Todo from './Todo.jsx';
import {useState} from 'react';


// const [todos, setTodos] = useState(
//   {
//       id: Math.random(),
//       text: "Learn JS",
//       isCompleted: false
//   },
//   {
//       id: Math.random(),
//       text: "Learn React js",
//       isCompleted: false
//   },
//   {
//       id: Math.random(),
//       text: "Learn Node js",
//       isCompleted: false
//   }
// );

function App() {
  return (
    <Card/>
  )
}

export default App;