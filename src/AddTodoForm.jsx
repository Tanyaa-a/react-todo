import React from "react";

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
      <label htmlFor="todoTitle"> Title </label>
      <input
        id="todoInput"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
