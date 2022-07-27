

export default function TodoFooter({todos, onClearCompleted}){

    const count = todos.filter(todo => todo.isCompleted).length;

    return(
        <div>
            <span>{count} / {todos.length} completed</span>
            <button onClick={() => {
                onClearCompleted()
            }}>Clear Completed</button>
        </div>
    )
}