import { fireEvent, render } from '@testing-library/react-native'
import Account from '@/src/app/(tabs)/account'
import * as ThemeProvider from '@/src/theme/ThemeProvider'
import * as TypedSelector from '@/src/hooks/useTypedSelector'
import { selectFavoriteMovies } from '@/src/store/selectors'
import { customRender } from '@/src/test-utils/renderWithProviders'

describe('Account screen', () => {
  it('renders theme toggle and movie list', () => {
    const { getByText, getByRole } = customRender(<Account />)

    expect(getByText('Theme: light')).toBeTruthy()
    expect(getByText('My List')).toBeTruthy()
    expect(getByRole('switch')).toBeTruthy()
  })

  it('does not render My List if there are no favourite movies', () => {
    const { getByText, queryByText, getByRole } = customRender(<Account />, {
      preloadedState: {
        favorites: {
          items: [],
        },
      },
    })

    expect(getByText('Theme: light')).toBeTruthy()
    expect(getByRole('switch')).toBeTruthy()
    expect(queryByText('My List')).toBeNull()
  })
})
