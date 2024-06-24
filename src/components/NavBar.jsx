import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={style.NavBarContainer}>
      <ul className={style.NavBarMenu}>
        <li className={`${style.NavBarLi} ${style.NavBarLogo}`}>
          <Link to="/todolistpage">
            <FontAwesomeIcon icon={faTasks} className={style.NavBarIcon} />
            TodoListApp
          </Link>
        </li>
        <li className={`${style.NavBarLi} ${style.BurgerIconContainer}`}>
          <FontAwesomeIcon
            icon={faBars}
            className={style.BurgerIcon}
            onClick={toggleMenu}
          />
        </li>
      </ul>
      <ul className={`${style.NavBarUl} ${menuOpen ? style.Active : ""}`}>
        <li className={style.NavBarLi}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className={style.NavBarLi}>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className={style.NavBarLi}>
          <Link to="/todolistpage" onClick={toggleMenu}>
            ToDoListPage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
