import { fireEvent } from '@testing-library/react-native'
import MovieCard from '@/src/components/MovieCard/MovieCard'
import { customRender } from '@/src/test-utils/renderWithProviders'
import { toggleFavorite } from '@/src/store/favoritesSice'
import * as reactRedux from 'react-redux'

describe('MovieCard', () => {
  const mockMovie = {
    imdbID: 'tt1234567',
    Title: 'Test Movie',
    Plot: 'A test plot',
    Poster: 'https://example.com/poster.jpg',
    Type: 'movie',
    Year: '2024',
  }

  it('renders movie poster', () => {
    const { getByTestId } = customRender(<MovieCard movie={mockMovie} onPress={jest.fn()} />)

    expect(getByTestId(`image-background-${mockMovie.imdbID}`)).toBeTruthy()
  })

  it('calls onPress with movie when card is tapped', async () => {
    const onPress = jest.fn()
    const { getByTestId } = customRender(<MovieCard movie={mockMovie} onPress={onPress} />)

    await fireEvent.press(getByTestId(`movie-card-touchable-${mockMovie.imdbID}`))
    expect(onPress).toHaveBeenCalledWith(mockMovie)
  })

  it('dispatches toggleFavorite when heart is pressed', async () => {
    const onPress = jest.fn()

    const mockDispatch = jest.fn()

    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch)

    const { getByTestId } = customRender(<MovieCard movie={mockMovie} onPress={onPress} />, {
      preloadedState: {
        favorites: { items: {} },
      },
    })

    await fireEvent.press(getByTestId(`toggle-fav-button-${mockMovie.imdbID}`))

    expect(mockDispatch).toHaveBeenCalledWith(toggleFavorite(mockMovie))
  })
})
