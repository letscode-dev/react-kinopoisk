import cn from 'classnames'
import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'

import Badge from '@mui/material/Badge'
import GraphicEqSharpIcon from '@mui/icons-material/GraphicEqSharp'

import styles from './styles.module.css'

const Header = () => {
  const favorites = useSelector((state) => state.favorites)

  const setActiveClass = (statuses) => {
    return statuses.isActive ? cn(styles.link, styles.linkActive) : styles.link
  }

  return (
    <div className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <GraphicEqSharpIcon className={styles.icon} />
        <NavLink to="/" className={setActiveClass}>
          Домашняя
        </NavLink>
        <NavLink to="/films" className={setActiveClass}>
          Список фильмов
        </NavLink>
        <NavLink to="/search" className={setActiveClass}>
          Поиск фильма
        </NavLink>

        <Badge
          badgeContent={favorites.length}
          color="primary"
          overlap="circular"
        >
          <NavLink to="/favorites" className={setActiveClass}>
            Избранное
          </NavLink>
        </Badge>
      </div>
    </div>
  )
}

export default Header
