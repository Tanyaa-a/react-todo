import PropTypes from 'prop-types';

const TodoListItem = (props) => {
  return (
    <li>
      <span>{props.item.title}</span> 
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
