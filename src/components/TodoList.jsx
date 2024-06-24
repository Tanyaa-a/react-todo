import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onToggleCompleted, onRemoveTodo, onUpdateTodo}) => {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            onToggleCompleted = {onToggleCompleted}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}/>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  TodoList: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }), 
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

export default TodoList;
