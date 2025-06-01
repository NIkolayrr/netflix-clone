import { fireEvent } from '@testing-library/react-native'
import CategoryList from '@/src/components/CategoryList/CategoryList'
import { usePaginatedMovies } from '@/src/hooks/usePaginatedMovies'
import { customRender } from '@/src/test-utils/renderWithProviders'

jest.mock('@/src/hooks/usePaginatedMovies', () => ({
  usePaginatedMovies: jest.fn(),
}))

const mockUsePaginatedMovies = usePaginatedMovies as jest.Mock

describe('CategoryList', () => {
  it('shows loading spinner when loading', () => {
    mockUsePaginatedMovies.mockReturnValue({
      movies: [],
      isLoading: true,
      isFetching: false,
      error: null,
      loadMore: jest.fn(),
    })

    const { getByTestId } = customRender(<CategoryList title='Loading' query='x' />)

    expect(getByTestId('loading-category')).toBeTruthy()
  })

  it('shows error when hook returns error', () => {
    mockUsePaginatedMovies.mockReturnValue({
      movies: [],
      isLoading: false,
      isFetching: false,
      error: new Error('Error loading movies'),
      loadMore: jest.fn(),
    })

    const { getByText } = customRender(<CategoryList title='Trending' query='x' />)

    expect(getByText('Error loading Trending')).toBeTruthy()
  })

  it('renders movie list when data is present', () => {
    const mockMovie = {
      imdbID: 'tt123',
      Title: 'Cool Movie',
    }

    const loadMore = jest.fn()

    mockUsePaginatedMovies.mockReturnValue({
      movies: [mockMovie],
      isLoading: false,
      isFetching: false,
      error: null,
      loadMore,
    })

    const { getByText } = customRender(<CategoryList title='Popular' query='x' />)

    expect(getByText('Popular')).toBeTruthy()
  })
})
