import { useState, useEffect } from "react"

export default function Test(){

    const [title, setTitle] = useState("");
    const [data, setData] = useState();

    let name = "";
    let confirmed = "";

    useEffect(() => {
        if(title.length === 2){
            fetch(`https://corona-api.com/countries/${title}`)
              .then(stream => stream.json())
              .then(results => setData(results.data))
        }
    },[title])


    if(data !== undefined){
        name = data.name;
        confirmed = data.latest_data.confirmed;
    }else{
        name = " Not Found"
    }

    return(
        <div>
            <input 
                value={title}
                onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                }}
            />
            {name} {confirmed}
        </div>
    )
}