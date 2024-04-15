import React from "react";
import InputWithLabel from "./InputWithLabel";

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
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        label="Title"
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        >Title  
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
