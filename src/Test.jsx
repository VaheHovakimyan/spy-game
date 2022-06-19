import { useState } from 'react';
import './App.scss';

function Test(){
    const [count, setCount] = useState(1);
    return(
        <>
            <h2>{count}</h2>
            <div onClick={() => {
                // evt.preventDefault();
                setCount(count + 1);
            }}>+</div>
        </>
    )
}

export default Test;