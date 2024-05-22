import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from './TodoListItem.module.css'

const TodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleChange = (event) => {
  };
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };
  return (
    <form className={style.InputTitle} onSubmit={handleAddTodo}>
      <InputWithLabel 
        label="Title"
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        placeholder="Add Todo"
        >Title:  
      </InputWithLabel>
      <button className={style.InputButton} type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
