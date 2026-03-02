import { NavLink } from "react-router";
import cn from "classnames";

import { useSelector } from "react-redux";

import styles from "./styles.module.css";

const Header = () => {
  const favorites = useSelector((state) => state.favorites);

  const setActiveClass = (statuses) => {
    if (statuses.isActive) {
      return cn(styles.link, styles.linkActive);
    } else {
      return styles.link;
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* <h1 className={styles.link}>Hello</h1> */}
      {/* <h1 className={cn(styles.link, styles.linkActive)}>Hello</h1> */}

      <NavLink className={setActiveClass} to="/">
        Домашняя
      </NavLink>
      <NavLink className={setActiveClass} to="/films">
        Список фильмов
      </NavLink>
      <NavLink className={setActiveClass} to="/search">
        Поиск
      </NavLink>

      <NavLink className={setActiveClass} to="/favorites">
        Избранное - {favorites.length}
      </NavLink>
    </div>
  );
};

export default Header;
