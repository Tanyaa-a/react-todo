import { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import style from "./TodoListItem.module.css";

const TodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: String (Date.now()) });
    setTodoTitle("");
  };
  return (
    <form className={style.InputTitle} onSubmit={handleAddTodo}>
      <InputWithLabel
        label="Title"
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        placeholder="Add Todo"
      >
        Title:
      </InputWithLabel>
      <button className={style.InputButton} type="submit">
        Add
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default TodoForm;
