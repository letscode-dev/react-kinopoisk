import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.push(action.payload)
    },
    removeFromFavorite: (state, action) => {
      const data = state.filter(el => el.id !== action.payload)
      return [...data]
    },
  }
})

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
