import { useState } from "react";

function LessText({text, max = 55}){
    const [isLess, setisLess] = useState(true);

    if(text.length <= max){
        return <h3>{text}</h3>
    }

    return(
        <h3 className="less">
            {isLess ? `${text.substring(0, max)} ...` : text}
            <button onClick={(evt) => {
                evt.preventDefault();
                setisLess(!isLess);
            }
            }>{isLess ? "More" : "Less"}</button>
        </h3>
    )
}

export default LessText;