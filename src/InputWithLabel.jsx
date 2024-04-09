import { children } from "react";
import React, { useRef } from "react";

export default function InputWithLabel({
  children,
  todoTitle,
  handleTitleChange,
}) {
  const inputRef = useRef(null);
  React.useEffect(() => {
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
      />
    </>
  );
}
