import PropTypes from 'prop-types';
import style from './TodoListItem.module.css'

const TodoListItem = (props) => {
  return (
    <li>
      <span className={style.ListItem}>{props.item.title}</span> 
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
