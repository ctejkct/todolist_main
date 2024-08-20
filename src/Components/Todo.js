import React from "react";
import "./Todo.css"
const Todo = (props) => {
  const deletehandler = () => {
    props.setTodos(props.todos.filter((ele) => ele.id !== props.todo.id));
  };
  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo-item">
        <div className='todo-text'>
      <li className={props.todo.completed ? "completed" : "not-completed"}> <strong>{props.todo.text}</strong>
      </li>
      </div>
      <div className="todo-button">
      <button
        className="complete-button"
        onClick={completeHandler}
        type="submit"
      >
        {!props.todo.completed ? "Done" : "Undo"}
      </button>
      <button className="delete-button" onClick={deletehandler} type="submit">
        Delete
      </button>
      </div>
    </div>
  );
};

export default Todo;
