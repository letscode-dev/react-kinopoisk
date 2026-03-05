import { useState, useEffect } from 'react'
import { search as apiSearchFilms } from '../../api/actions/films'
import TextField from '@mui/material/TextField'

import styles from './styles.module.css'

const SearchFilms = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const params = {
        keyword: value,
      }

      const response = await apiSearchFilms(params)
      setData(response)
    })()
  }, [value])

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Поиск по фильмам</h1>

      <TextField
        label="Введите название фильма"
        variant="outlined"
        size="small"
        onChange={onChange}
        value={value}
        className={styles.input}
      />
      {/* <input type="text" onChange={onChange} value={value} /> */}

      <div className={styles.wrapper}>
        {data.length !== 0 &&
          data.map((item) => (
            <div key={item.filmId} className={styles.item}>
              <img className={styles.img} src={item.posterUrlPreview} alt="" />
              <div className={styles.name}>{item.nameRu}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchFilms
