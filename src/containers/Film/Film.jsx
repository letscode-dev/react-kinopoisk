import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { get as apiGetFilms } from '../../api/actions/films'
import { addToFavorite, removeFromFavorite } from '../../store/favoritesSlice'
import { checkFilmPoster } from '../../utils/films/films'

import styles from './styles.module.css'

const ButtonsElement = (props) => {
  const { data, setData, isFavorites } = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const buttonProps = {
    variant: 'outlined',
    size: 'small',
    className: styles.button,
  }

  const onClose = () => {
    navigate(-1)
    setData([])
  }

  const onFavoritesAddClick = () => {
    dispatch(
      addToFavorite({
        id: data.kinopoiskId,
        name: data.nameRu,
        poster: data.posterUrl,
        year: data.year,
      }),
    )
  }

  const onFavoritesRemoveClick = () => {
    dispatch(removeFromFavorite(data.kinopoiskId))
  }

  return (
    <div className={styles.buttonsWrapper}>
      <Button
        onClick={onClose}
        startIcon={<ArrowBackIcon sx={{ color: '#0004ff' }} />}
        {...buttonProps}
      >
        Назад
      </Button>

      {isFavorites ? (
        <Button
          onClick={onFavoritesRemoveClick}
          startIcon={<RemoveCircleIcon sx={{ color: '#d84848' }} />}
          {...buttonProps}
        >
          Удалить из избранного
        </Button>
      ) : (
        <Button
          onClick={onFavoritesAddClick}
          startIcon={<CheckCircleIcon sx={{ color: '#07b50a' }} />}
          {...buttonProps}
        >
          Добавить в избранное
        </Button>
      )}

      <Button
        startIcon={<OpenInNewIcon sx={{ color: '#0004ff' }} />}
        href={data.webUrl}
        target="_blank"
        {...buttonProps}
      >
        Ссылка на Кинопоиск
      </Button>
    </div>
  )
}

const Film = () => {
  const [data, setData] = useState([])
  const [isFavorites, setIsFavorites] = useState(false)

  const params = useParams()

  const favorites = useSelector((state) => state.favorites)

  useEffect(() => {
    ;(async () => {
      const data = await apiGetFilms(params.id)
      setData(data)
    })()
  }, [params.id])

  useEffect(() => {
    const favoritesFilm = favorites.filter((el) => el.id === data.kinopoiskId)
    setIsFavorites(!!favoritesFilm.length)
  }, [data.kinopoiskId, favorites])

  if (!data && data.length == 0) {
    return (
      <div className="section">
        <div>Нет данные о фильме</div>
      </div>
    )
  }

  if (data.length === 0) {
    return null
  }

  return (
    <div className="section">
      <h1 className="h1">
        {data.nameRu} ({data.year})
      </h1>
      <div className={styles.wrapper}>
        <img
          src={checkFilmPoster(data.posterUrl)}
          alt="Poster"
          className={styles.img}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>Описание</h3>
          <div>{data.description ? data.description : 'Нет данных'}</div>

          <div className={styles.ratingWrapper}>
            <h3 className={styles.title}>Рейтинг</h3>
            <Rating
              defaultValue={data.ratingKinopoisk}
              precision={0.5}
              max={10}
              readOnly
            />
          </div>

          <ButtonsElement
            data={data}
            setData={setData}
            isFavorites={isFavorites}
          />
        </div>
      </div>
    </div>
  )
}

export default Film
