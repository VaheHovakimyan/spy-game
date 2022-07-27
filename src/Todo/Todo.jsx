import { useState } from "react";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";
import TodoFooter from "./TodoFooter";


export default function Todo(){

    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "Learn JS",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn ReactJS",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn NodeJS",
            isCompleted: false
        }
    ]);

    return(
        <div>
            <TodoForm 
                onAdd={(text) => {
                    {text !== "" && 
                        setTodos([
                            ...todos,
                            {
                                id: Math.random(),
                                text: text,
                                isCompleted: false
                            }
                        ])
                    }
                }}
            />
            <Todolist 
                todos={todos} 
                onDelete={(todo) => {
                    setTodos(
                        todos.filter(t => t.id !== todo.id)
                    )
                }}
                onChange={(newTodo) => {
                    setTodos(
                        todos.map(todo => {
                            if(newTodo.id === todo.id){
                                return newTodo;
                            }
                            return todo;
                        })
                    )
                }}
            />
            <TodoFooter
                todos={todos}
                onClearCompleted={() => {
                    todos.filter(todo => !todo.isCompleted)
                }}
            />
        </div>
    )
}