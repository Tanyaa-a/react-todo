import { useEffect } from 'react';
import style from "./Home.module.css";

const YourNameComponent = ({ name, onNameChange }) => {
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      onNameChange(storedName);
    }
  }, [onNameChange]);

  useEffect(() => {
    return () => {
      localStorage.setItem('name', name);
    };
  }, [name]);

  const handleChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
      <input
      type="text"
      className={style.NameInput}
      placeholder="enter your name"
      value={name}
      onChange={handleChange}
    />
  );
};

export default YourNameComponent;
