import { useState, useEffect } from "react";
import Form from "./Components/Form";
import "./App.css";
import TodoList from "./Components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    const filterhandler = () => {
      switch (status) {
        case "completed":
          setFilteredItems(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredItems(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredItems(todos);
          break;
      }
    };
    filterhandler();
  }, [todos, status]);

  return (
    <>
      <h1 className="header">To Do List</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <TodoList
        filteredItems={filteredItems}
        todos={todos}
        setTodos={setTodos}
      ></TodoList>
    </>
  );
}

export default App;
