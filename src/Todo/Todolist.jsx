import Todoitem from "./Todoitem"


export default function Todolist({todos, onDelete, onChange}){
    return(
        <>
            {
                todos.map(todo => {
                    return(
                        <Todoitem
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            onChange={onChange}
                        />
                    )
                })
            }
        </>
    )
}