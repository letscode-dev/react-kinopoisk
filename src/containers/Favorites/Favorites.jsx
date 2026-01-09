import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import UiCard from '../../ui-kit/UiCard'

import styles from './styles.module.css'

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites)

  const navigate = useNavigate()

  const handleClick = async (id) => {
    navigate('/film/'+id)
  }

  return (
    <div className='section'>
      <h1 className="h1">Избранное</h1>

      <div className={styles.wrapper}>
        {favorites.length !== 0 ? favorites.map(item => (
          <UiCard
            key={item.id}
            data={{
              id: item.id,
              poster: item.poster,
              name: item.name,
              year: item.year
            }}
            onClick={handleClick}
          />
        )) : (
          <h4>Не найдено</h4>
        )}
      </div>
    </div>
  )
}

export default Favorites
