import { useState } from 'react';
import './App.css'

function Back(){
    const [background, setbackground] = useState(true);
    return(
        <div className='App'>
            <button className={background ? "react" : "js"}  onClick={(evt) => {
                evt.preventDefault();
                setbackground(!background);
            }}>{background ? "React" : "Javascript"}</button>
        </div>
    )
}

export default Back;