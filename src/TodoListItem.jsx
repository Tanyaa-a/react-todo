import PropTypes from "prop-types";

const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <>
      <li>
        <span>{item.title}</span>
        <button onClick={() => onRemoveTodo(item.id)} type="button">
          Remove
        </button>
      </li>
    </>
  );
};
TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  
};
export default TodoListItem;
