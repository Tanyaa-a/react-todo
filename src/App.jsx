import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     new Promise((resolve) => {
       setTimeout(
         () =>
           resolve({
             data: {
               todoList: JSON.parse(localStorage.getItem("savedTodoList")),
             },
           }),
        2000
      );
      
     }).
     then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => { 
   if  (!isLoading) 
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  return (
    <>
     
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      {isLoading ?(<p>Loading...</p>)  :  (<TodoList onRemoveTodo={removeTodo} todoList={todoList}/>)  }
     
    </>
  );
}
export default App;
