import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from './TodoListItem.module.css'


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Fetch data from Airtable
  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
//accepts the results of mapping data.records
      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.title,
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }
// Fetch data from Airtable when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading)
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
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={
            <>
            <h1 className={style.TodoTitle}>Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
        )}   
            </>
        }>
        </Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}
export default App;
