import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
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
};

export default TodoList;
