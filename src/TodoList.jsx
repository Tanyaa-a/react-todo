import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 0,
      title: 'Review video lessons',
    },
    {
      id: 1,
      title: 'Read the "React" book',
    },
      {
        id: 2,
        title: 'Compleat the assignment', 
      }  
] 
const TodoList = () => {
  return (
    <ul>
      {todoList.map((item) => {
       return <TodoListItem key={item.id} item={item} />
      })}
    </ul>
  );
}
export default TodoList