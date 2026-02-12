import { useState, useEffect } from "react";
import { getList as apiGetListFilm } from "../../api/actions/films";

import styles from "./styles.module.css";

const params = {
  type: 'FILM',
  yearFrom: '2020',
  countries: 1
}

const FilmsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiGetListFilm(params);
      setData(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      {data.length !== 0 && data.map(item => (
        <div key={item.kinopoiskId} className={styles.item}>
          <img className={styles.img} src={item.posterUrlPreview} alt="" />
          <div className={styles.name}>{item.nameRu}</div>
        </div>
      ))}
    </div>
  );
};

export default FilmsList;
