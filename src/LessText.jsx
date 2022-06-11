import { useState } from "react";

function LessText(props){

    const [showLess, setshowLess] = useState(true);

    const text = props.text;
    const max = 55;
    
    if(text.length <= max){
        return <h3>{text}</h3>;
    }

    return(
        <>
            <h3>
                {showLess ? `${text.substring(0, max)} ...` : text}
            
            <a href="#" onClick={(evt) => {
                evt.preventDefault();
                setshowLess(!showLess);
            }}>{showLess ? "more" : "less"}</a>
            </h3>
        </>
        
    )
}

export default LessText;