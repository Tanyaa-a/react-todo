import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm"

function App() {
  const [todoList, setTodoList] = React.useState([])
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  return (
    <div>
      <h1>
        Todo List
      </h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />      
    </div>
  )
}
export default App
