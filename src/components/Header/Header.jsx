import { Link } from "react-router";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to="/">
        Домашняя
      </Link>
      <Link className={styles.link} to="/films">
        Список фильмов
      </Link>
      <Link className={styles.link} to="/search">
        Поиск
      </Link>
    </div>
  );
};

export default Header;
