import { useState } from 'react';
import './App.css'

function Burger(){
    const [burger, setBurger] = useState(true);
    return(
        <div className={burger ? "burger" : "x"} onClick={(evt) =>{
            evt.preventDefault();
            setBurger(!burger);
        }}>
            <div className='flex'>
                <div className='first'></div>
                <div className='second'></div>
                <div className='third'></div>
            </div>
        </div>
    )
}

export default Burger;