import React from "react";
import "./Form.css"
const Form = (props) => {
  const inputChangeHandler = (event) => {

    props.setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (props.inputText.trim().length===0){
        return;
    }
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText("")
  };
  const statusHandler=(event)=>{
    props.setStatus(event.target.value)
  }
  return (
    <form className='full-form'>
      <input className='input-field' onChange={inputChangeHandler} value={props.inputText}type="text" />
      <button className="submit-button" onClick={submitHandler} type="submit">
        <i> + </i>
      </button>
      <select onChange={statusHandler} className="selector" name="todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
