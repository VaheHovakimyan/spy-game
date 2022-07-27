

export default function Todoitem({todo, onDelete, onChange}){
    return(
        <div>
            <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                onChange({
                    ...todo,
                    isCompleted: e.target.checked
                })
            }}/>
            <span>{todo.text}</span>
            <button onClick={() => {
                onDelete(todo);
            }}>X</button>
        </div>
    )
}