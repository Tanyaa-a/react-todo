import style from './TodoListItem.module.css'
import PropTypes from "prop-types";
import trashIcon from "./assets/trash.svg";

const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <>
      <li className={style.ListItem}>
        <span>{item.title}</span>
        <button className={style.ListItemButton} onClick={() => onRemoveTodo(item.id)} type="button">
       
          <img src={trashIcon} className={style.TrashIcon} alt="Delete" />
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
