import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function InputWithLabel({
  children,
  todoTitle,
  handleTitleChange,
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="todoInput">{children}</label>
      <input
        ref={inputRef}
        id="todoInput"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Add the task"
      />
    </>
  );
}

InputWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};
