import { useState, useEffect } from "react";
import { get as apiGetFilm } from "../../api/actions/films";
import { getList as apiGetListFilm } from "../../api/actions/films";

import styles from "./styles.module.css";

const kinopoiskId = 666;

const Film = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      apiGetListFilm({})
      const response = await apiGetFilm(kinopoiskId);
      setData(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      {data && (
        <div>
          <div>{data.nameRu}</div>
          <img className={styles.img} src={data.posterUrl} alt="" />
          <p>{data.description}</p>
          <a
            href={`https://www.kinopoisk.ru/film/${kinopoiskId}`}
            target="_blank"
          >
            Ссылка на Кинопоиск
          </a>
        </div>
      )}
    </div>
  );
};

export default Film;
