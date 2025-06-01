import { FC, PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { render, RenderOptions } from '@testing-library/react-native'
import { configureStore, preloadedState } from '@reduxjs/toolkit'
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin'

import { ThemeProvider } from '@/src/theme/ThemeProvider'
import { RootState, store as defaultStore } from '@/src/store/store'

import { omdbApi } from '@/src/store/api'
import favoritesReducer from '@/src/store/favoritesSice'
import featuredReducer from '@/src/store/featuredSlice'
import moviesReducer from '@/src/store/moviesSlice'
import themeReducer from '@/src/store/themeSlice'

export const defaultMockState: Partial<RootState> = {
  omdbApi: undefined,
  featured: {
    movie: {
      Title: 'The King of Comedy',
      Year: '1982',
      imdbID: 'tt0085794',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYTQxNGUwNmUtMDJhYy00ZjM1LWFjZjQtYmI5ZGY4YTZmZWQyXkEyXkFqcGc@._V1_SX300.jpg',
    },
  },
  movies: {
    ids: ['tt0085794', 'tt0361467'],
    entities: {
      tt0085794: {
        Title: 'The King of Comedy',
        imdbID: 'tt0085794',
        Year: '1982',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYTQxNGUwNmUtMDJhYy00ZjM1LWFjZjQtYmI5ZGY4YTZmZWQyXkEyXkFqcGc@._V1_SX300.jpg',
        Plot: 'Rupert Pupkin is obsessed with becoming a comedy great...',
      },
      tt0361467: {
        Title: 'Confessions of a Teenage Drama Queen',
        imdbID: 'tt0361467',
        Year: '2004',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTIzMDE0MDQ5Ml5BMl5BanBnXkFtZTcwNTUwMDUyMQ@@._V1_SX300.jpg',
      },
    },
  },
  favorites: {
    items: {
      tt0361467: {
        Title: 'Confessions of a Teenage Drama Queen',
        Year: '2004',
        imdbID: 'tt0361467',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTIzMDE0MDQ5Ml5BMl5BanBnXkFtZTcwNTUwMDUyMQ@@._V1_SX300.jpg',
      },
    },
  },
  theme: {
    mode: 'light',
  },
}

interface CustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: preloadedState<RootState>
  store?: ReturnType<typeof configureStore>
}

const mockReducer = jest.fn((state) => state)
export const createMockStore = (preloadedState?: preloadedState<RootState>) =>
  configureStore({
    reducer: {
      [omdbApi.reducerPath]: omdbApi.reducer,
      favorites: favoritesReducer,
      featured: featuredReducer,
      movies: moviesReducer,
      theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(omdbApi.middleware),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
    preloadedState,
  })

export const WrapperProvider: FC<PropsWithChildren<CustomRenderOptions>> = ({
  children,
  store,
  preloadedState = defaultMockState,
}) => {
  const testStore = store ?? createMockStore(preloadedState)
  return (
    <Provider store={testStore}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}

export const customRender = (ui: ReactElement, options: CustomRenderOptions = {}) =>
  render(ui, {
    wrapper: (props) => <WrapperProvider {...props} {...options} />,
    ...options,
  })
