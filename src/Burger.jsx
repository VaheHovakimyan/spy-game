import { useState } from "react";
import './App.scss';

function Burger(){
    const [bool, setBool] = useState(true);
    return(
        <div className={bool ? "burger" : "x"} onClick={(evt) => {
            evt.preventDefault();
            setBool((bool) => {
                return !bool
            });
        }

        }>
            <div className="flex">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </div>
        </div>
    )
}

export default Burger;