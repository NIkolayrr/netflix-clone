import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin'
import { omdbApi } from './api'
import favoritesReducer from './favoritesSice'
import featuredReducer from './featuredSlice'
import moviesReducer from './moviesSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    [omdbApi.reducerPath]: omdbApi.reducer,
    favorites: favoritesReducer,
    featured: featuredReducer,
    movies: moviesReducer,
    theme: themeReducer,
  },
  middleware: (getDefault) => getDefault().concat(omdbApi.middleware),
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
