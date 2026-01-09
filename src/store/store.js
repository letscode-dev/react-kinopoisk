import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favoritesSlice'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const persistedFavorites = getLocalStorage('store')

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  },
  preloadedState: {
    favorites: Array.isArray(persistedFavorites) ? persistedFavorites : []
  }
})

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorites)
})
