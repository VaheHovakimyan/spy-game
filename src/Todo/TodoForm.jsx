import { useState } from "react";


export default function TodoForm({onAdd}){

    const [text, setText] = useState("");

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input type="text" placeholder="Task name" value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button>Add</button>
        </form>
    )
}