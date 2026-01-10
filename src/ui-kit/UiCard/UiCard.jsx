import { checkFilmPoster } from '../../utils/films/films'

import styles from './styles.module.css'

const UiCard = (props) => {
  const { data, onClick = () => null } = props

  return (
    <div className={styles.item} onClick={() => onClick(data.id)}>
      <img
        src={checkFilmPoster(data.poster)}
        alt={data.name || 'Poster'}
        className={styles.img}
      />
      <div className={styles.name}>{`${data.name} (${data.year})`}</div>
    </div>
  )
}

export default UiCard
