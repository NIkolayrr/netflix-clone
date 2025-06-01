import { render } from '@testing-library/react-native'
import { Text } from 'react-native'
import Details from '@/src/app/(tabs)/details/[id]'
import { useGetMovieByIdQuery } from '@/src/store/api'
import { customRender } from '@/src/test-utils/renderWithProviders'

jest.mock('@/src/store/api', () => {
  const actual = jest.requireActual('@/src/store/api')

  return {
    ...actual,
    useGetMovieByIdQuery: jest.fn(),
  }
})

describe('Details screen', () => {
  const mockMovie = {
    imdbID: 'tt123',
    Title: 'Test Movie',
    Genre: 'Drama',
    imdbRating: '8.5',
    imdbVotes: '100,000',
    Year: '2020',
    Runtime: '120 min',
    Language: 'English',
    Poster: 'https://example.com/poster.jpg',
    Plot: 'This is a test plot.',
    Director: 'John Doe',
    Writer: 'Jane Doe',
    Actors: 'Actor A, Actor B',
    Released: '2020-01-01',
    Country: 'USA',
    Awards: 'Best Picture',
    Rated: 'PG-13',
    BoxOffice: '$1,000,000',
    Production: 'Test Studio',
  }

  it('shows loading indicator while fetching', () => {
    ;(useGetMovieByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    })
    const { getByText } = customRender(<Details />)
    expect(getByText('Loading...')).toBeTruthy()
  })

  it('shows fallback if no movie found', () => {
    ;(useGetMovieByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    })
    const { getByText } = customRender(<Details />)
    expect(getByText('Movie not found')).toBeTruthy()
  })

  it('renders movie details when data is available', () => {
    ;(useGetMovieByIdQuery as jest.Mock).mockReturnValue({
      data: mockMovie,
      isLoading: false,
    })
    const { getByText } = customRender(<Details />)
    expect(getByText(mockMovie.Title)).toBeTruthy()
    expect(getByText(mockMovie.Plot)).toBeTruthy()
    expect(getByText(`⭐ ${mockMovie.imdbRating} (${mockMovie.imdbVotes} votes)`)).toBeTruthy()
    expect(getByText(`${mockMovie.Year} · ${mockMovie.Runtime} · ${mockMovie.Language}`)).toBeTruthy()
    expect(getByText(/Director:/)).toBeTruthy()
    expect(getByText(/Writer:/)).toBeTruthy()
    expect(getByText(/Actors:/)).toBeTruthy()
  })
})
