import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./AddTodoForm";
import { fetchData } from "./APIUtils";
import style from "./TodoListItem.module.css";

function ToDoListPage() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await fetchData(); 
        setTodoList(todos);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function toggleCompleted(id) {
    setTodoList(todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  function updateTodo(updatedItem) {
    setTodoList(todoList.map((todo) =>
      todo.id === updatedItem.id ? { ...todo, title: updatedItem.title } : todo
    ));
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div className={style.TodoListWrapper}>
      <h1 className={style.TodoTitle}>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          onRemoveTodo={removeTodo}
          onToggleCompleted={toggleCompleted}
          onUpdateTodo={updateTodo}
          todoList={todoList}
        />
      )}
    </div>
  );
}

export default ToDoListPage;
