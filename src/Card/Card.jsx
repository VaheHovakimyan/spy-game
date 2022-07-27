import {useState} from 'react';
import mclaren from './list_images/mclaren.jpg';
import mercedes from "./list_images/mercedes.webp";
import tesla from "./list_images/tesla.jpg";
import "../App.scss";


const info = [
  { id: 1, name: "Mclaren", model: "600LT", picture: mclaren, price: 54500 },
  { id: 2, name: "Mercedes", model: "W221", picture: mercedes, price: 21300 },
  { id: 3, name: "Tesla", model: "x3", picture: tesla, price: 52000 },
];

let sum = 0;

function Counter({price}){
  const [count, setCount] = useState(1);

  function Minus(){
    {count > 1 && setCount(count - 1)}
  }

  function Plus(){
    {count < 10 && setCount(count + 1)}
  }



  return(
    <div className='count_flex'>
      <div className='minus' onClick={Minus}>-</div>
        <h3>Count: {count}</h3>
      <div className='plus' onClick={Plus}>+</div>
    </div>
  )
}

export default function Card() {
  const cards = info.map((car) => {
    return (
      <div className="card" key={car.id}>
        <h2> {car.name} {car.model}</h2>
        <img src={car.picture} width="150px" height="110px" alt="car_picture"/>
        <h3>Price: {car.price} $</h3>
        <Counter price={car.price}/>
      </div>
    );
  });

  return(
    <>
      <div className="card_flex">
        {cards}
      </div>
      <h2>Amount: {sum}</h2>
    </>
  )
}