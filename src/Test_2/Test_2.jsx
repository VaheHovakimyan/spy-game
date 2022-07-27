import { useState } from "react"
import '../App.scss';

export default function Test_2(){

    const [value, setValue] = useState(10);

    return(
        <div>
            <input className="inp" type="range" name="Range_bar" id="1" value={value} onChange={(e) => {
                e.preventDefault();
                setValue(e.target.value);
            }} />
            <div className="info">
                <p>{+value === 0 ? '-' : '+'}</p>
                <p>{value}</p>
            </div>
        </div>       
    )
}