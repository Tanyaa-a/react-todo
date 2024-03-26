import TodoListItem from "./TodoListItem";

const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList.map((item) => {
       return <TodoListItem key={item.id} item={item} />
      })}
    </ul>
  );
}
export default TodoList