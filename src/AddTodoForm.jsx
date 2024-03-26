import React from "react";

const TodoForm = (props) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    //let todoTitle = event.target.title.value; //retrieve the value of the title element from the event target and store it in a variable named todoTitle
    // event.target.reset();
    props.onAddTodo({ title: todoTitle, id: Date.now() });
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
