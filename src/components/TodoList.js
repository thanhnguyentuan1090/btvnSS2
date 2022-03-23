import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todo, ...props }) {
    console.log(props);
    return (
    <div className="list">
        <ul>
        
            {todo.map((item, index) => (
                // <TodoItem key={index} index={index} value={item.value} />
                <TodoItem key={index} index={index} value={item.value}/>
            ))}
        </ul>
    </div>
    );

}
