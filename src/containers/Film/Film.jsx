import { useState, useEffect } from "react";
import { get as apiGetFilm } from "../../api/actions/films";
import { getList as apiGetListFilm } from "../../api/actions/films";

import styles from "./styles.module.css";
import { useNavigate, useParams } from "react-router";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesReducer";
import { useDispatch, useSelector } from "react-redux";

const Film = () => {
  const [data, setData] = useState([]);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const isFavorites = favorites.some((el) => el.id === data?.kinopoiskId);

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

  const onFavoritesAddClick = () => {
    dispatch(
      addToFavorites({
        id: data.kinopoiskId,
        name: data.nameRu,
        poster: data.posterUrl,
      }),
    );
  };
  const onFavoritesRemoveClick = () => {
    dispatch(removeFromFavorites(data.kinopoiskId));
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

          {isFavorites ? (
            <button onClick={onFavoritesRemoveClick}>
              ❌ Удалить из избранного
            </button>
          ) : (
            <button onClick={onFavoritesAddClick}>
              ✅ Добавить в избранное
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Film;
