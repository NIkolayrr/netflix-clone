import { fireEvent } from '@testing-library/react-native'
import MovieList from '@/src/components/MovieList/MovieList'
import { customRender } from '@/src/test-utils/renderWithProviders'
import { Movie } from '@/src/types/Movie'

const mockMovies: Movie[] = [
  {
    Title: 'Movie 1',
    Year: '2020',
    imdbID: 'tt001',
    Type: 'movie',
    Poster: 'https://example.com/poster1.jpg',
  },
  {
    Title: 'Movie 2',
    Year: '2021',
    imdbID: 'tt002',
    Type: 'movie',
    Poster: 'https://example.com/poster2.jpg',
  },
]

describe('MovieList', () => {
  it('renders the title and movie cards', () => {
    const { getByText, getByTestId } = customRender(
      <MovieList title='Popular' movies={mockMovies} onItemPress={jest.fn()} />
    )

    expect(getByText('Popular')).toBeTruthy()
    expect(getByTestId(`movie-card-touchable-${mockMovies[0].imdbID}`)).toBeTruthy()
    expect(getByTestId(`movie-card-touchable-${mockMovies[1].imdbID}`)).toBeTruthy()
  })

  it('calls onItemPress when a movie is pressed', async () => {
    const onItemPress = jest.fn()

    const { getByText, getByTestId } = customRender(
      <MovieList title='Top Rated' movies={mockMovies} onItemPress={onItemPress} />
    )

    await fireEvent.press(getByTestId(`movie-card-touchable-${mockMovies[0].imdbID}`))
    expect(onItemPress).toHaveBeenCalledWith(mockMovies[0])
  })

  it('returns null when movies array is empty', () => {
    const { toJSON } = customRender(<MovieList title='Empty List' movies={[]} onItemPress={jest.fn()} />)
    expect(toJSON()).toBeNull()
  })
})
