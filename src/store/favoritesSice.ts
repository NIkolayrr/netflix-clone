import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../types/Movie'

interface FavoritesState {
  items: Record<string, Movie>
}

const initialState: FavoritesState = { items: {} }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Movie>) {
      const id = action.payload.imdbID
      if (state.items[id]) {
        delete state.items[id]
      } else {
        state.items[id] = action.payload
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
