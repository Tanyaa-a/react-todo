import PropTypes from 'prop-types';

const TodoListItem = ({ item }) => {
  return (
    <li>
      <span>{item.title}</span> 
    </li>
  ) 
}
TodoListItem.propTypes = {
  item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
  }).isRequired
};
export default TodoListItem;
