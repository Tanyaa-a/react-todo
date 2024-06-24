import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCheck,
  faSave,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import style from "./TodoListItem.module.css";

const TodoListItem = ({
  item,
  onRemoveTodo,
  onUpdateTodo,
  onToggleCompleted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdateTodo({
      ...item,
      title: editedTitle,
    });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedTitle(item.title);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <li
      className={`${style.ListItem} ${item.completed ? style.Completed : ""}`}
    >
      <div>
        <FontAwesomeIcon
          className={style.CompleteIcon}
          icon={faCheck}
          onClick={() => onToggleCompleted(item.id)}
        />
      </div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={handleInputChange}
            className={style.EditInput}
          />
          <FontAwesomeIcon
            className={style.SaveIcon}
            icon={faSave}
            onClick={handleSaveClick}
          />
          <FontAwesomeIcon
            className={style.CancelIcon}
            icon={faTimes}
            onClick={handleCancelClick}
          />
        </div>
      ) : (
        <span className={item.completed ? style.CompletedText : ""}>
          {item.title}
        </span>
      )}
      <div className={style.IconContainer}>
        {!isEditing && (
          <>
            <FontAwesomeIcon
              className={style.EditIcon}
              icon={faPenToSquare}
              onClick={handleEditClick}
            />
            <FontAwesomeIcon
              className={style.DeleteIcon}
              icon={faTrash}
              onClick={() => onRemoveTodo(item.id)}
            />
          </>
        )}
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

export default TodoListItem;
