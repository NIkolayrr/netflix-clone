import { configureStore } from '@reduxjs/toolkit'
import { omdbApi } from './api'
import favoritesReducer from './favoritesSice'
import featuredReducer from './featuredSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    [omdbApi.reducerPath]: omdbApi.reducer,
    favorites: favoritesReducer,
    featured: featuredReducer,
    theme: themeReducer,
  },
  middleware: (getDefault) => getDefault().concat(omdbApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
