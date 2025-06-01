import FeaturedShow from '@/src/components/FeaturedShow/FeaturedShow'
import { useGetMovieByIdQuery } from '@/src/store/api'
import { customRender } from '@/src/test-utils/renderWithProviders'

jest.mock('@/src/store/api', () => {
  const actual = jest.requireActual('@/src/store/api')

  return {
    ...actual,
    useGetMovieByIdQuery: jest.fn(),
  }
})

const mockMovie = {
  imdbID: 'tt1234567',
  Title: 'Test Movie',
  Plot: 'A test movie plot.',
  Poster: { uri: 'test-poster.jpg' },
}

describe('FeaturedShow', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders nothing if no featured movie is selected', () => {
    ;(useGetMovieByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    })
    const { toJSON } = customRender(<FeaturedShow />)
    expect(toJSON()).toBeNull()
  })

  it('renders movie data when featured movie is available', () => {
    ;(useGetMovieByIdQuery as jest.Mock).mockReturnValue({
      data: mockMovie,
      isLoading: false,
    })
    const { getByText } = customRender(<FeaturedShow />, {
      preloadedState: {
        featured: { movie: mockMovie },
      },
    })

    expect(getByText('Test Movie')).toBeTruthy()
    expect(getByText('A test movie plot.')).toBeTruthy()
    expect(getByText('Play')).toBeTruthy()
    expect(getByText('My List')).toBeTruthy()
  })
})
