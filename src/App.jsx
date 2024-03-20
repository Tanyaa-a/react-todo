import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm"

function App() {
  const [newTodo, setNewTodo] = React.useState('')
  return (
    <div>
      <h1>
        Todo List
      </h1>
      <TodoForm onAddTodo={setNewTodo} />
      <TodoList />      
      <p>
        New Todo: {newTodo}
      </p>
    </div>
  )
}
export default App
