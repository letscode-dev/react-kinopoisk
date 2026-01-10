import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'

import { search as apiSearchFilms } from '../../api/actions/films'
import UiCard from '../../ui-kit/UiCard'

import styles from './styles.module.css'

const SearchFilms = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      const params = {
        keyword: value,
      }
      const data = await apiSearchFilms(params)
      data && setData(data)
    })()
  }, [value])

  const onChange = (e) => setValue(e.target.value)

  const handleClick = async (id) => {
    navigate('/film/' + id)
  }

  return (
    <div className="section">
      <h1 className="h1">Поиск фильма</h1>

      <TextField
        className={styles.input}
        label="Введите название фильма"
        variant="outlined"
        value={value}
        size="small"
        onChange={onChange}
      />

      <div className={styles.wrapper}>
        {data.length !== 0 ? (
          data.map((item) => (
            <UiCard
              key={item.filmId}
              data={{
                id: item.filmId,
                poster: item.posterUrlPreview,
                name: item.nameRu,
                year: item.year,
              }}
              onClick={handleClick}
            />
          ))
        ) : value !== '' ? (
          <Alert severity="warning" className={styles.alert}>
            Не найдено
          </Alert>
        ) : null}
      </div>
    </div>
  )
}

export default SearchFilms
