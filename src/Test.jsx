import { useState } from 'react';
import './App.css'

function Test(){
    const [bool, setBool] = useState(true);
    return(
        <div className={bool ? "uxix" : "teq"} onClick={(evt) =>{
            evt.preventDefault();
            setBool(!bool);
        }}>

        </div>
    )
}

export default Test;