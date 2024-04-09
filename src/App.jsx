import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState("");
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
    
  }
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}
export default App;

