import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
    
  return (
    <div>
      <ul>
        {props.filteredItems.map((todo) => (
          <Todo
            todos={props.todos}
            setTodos={props.setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
