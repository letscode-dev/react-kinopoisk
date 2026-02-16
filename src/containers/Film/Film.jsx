import { useState, useEffect } from "react";
import { get as apiGetFilm } from "../../api/actions/films";
import { getList as apiGetListFilm } from "../../api/actions/films";

import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router";

const Film = () => {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      apiGetListFilm({});
      const response = await apiGetFilm(params.id);
      setData(response);
    })();
  }, [params.id]);

  const onClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      {data && (
        <div>
          <div>{data.nameRu}</div>
          <img className={styles.img} src={data.posterUrl} alt="" />
          <p>{data.description}</p>
          <a
            href={`https://www.kinopoisk.ru/film/${params.id}`}
            target="_blank"
          >
            Ссылка на Кинопоиск
          </a>
          <button onClick={onClose}>Назад</button>
        </div>
      )}
    </div>
  );
};

export default Film;
