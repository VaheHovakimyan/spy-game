import { useState } from "react";
import './App.scss';
import mclaren from './list_images/mclaren.jpg';
import mercedes from './list_images/mercedes.webp';
import tesla from './list_images/tesla.jpg';


// {id: , name: , picture: ,  price: , count: }

var pp = 5;

// let result = 0;

const info = [
    { id: 1, name: "Mclaren", model: "600LT", picture: "https://i.ibb.co/8cXbgbN/tesla.jpg", price: 54500},
    { id: 2, name: "Mercedes", model: "W221", picture: mercedes, price: 21300},
    { id: 3, name: "Tesla", model: "x3", picture: tesla, price: 52000}
];

let amount = 0;

function Counter(){
    const [count , setCount] = useState(0);
    pp = count;
    info.forEach((car) => {
        return  amount = amount + (count * car.price);
    })
    // console.log(amount);
    // // console.log(count);
    // console.log(pp);
    
    return (
        <div className='count_flex'>
            <div className='minus' onClick={() => {if(count > 0){setCount(count - 1)}}}>-</div>
                <h3>Count:{count}</h3> 
            <div className='plus' onClick={() => {if(count < 10){setCount(count + 1)}}}>+</div>
            {/* <p className="amount">Amount: {amount} $</p> */}
        </div>
    
    );
}


function Card(){
    const elements = info.map((car) => {
            return (
                <div className='card' key={car.id}>
                    <h2>{car.name} {car.model}</h2>
                    <img src={car.picture} width="120px" height="120px" alt="car" />
                    <h3>Price: {car.price} dollar</h3>
                    <Counter/>
                </div>
        );
    });

    return (
        <>
            <div className='card_flex'>
                {elements}
            </div>
        </>
    )
}

export default Card;