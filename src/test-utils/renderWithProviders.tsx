import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from '../theme/ThemeProvider'

export function renderWithProviders(children: React.ReactElement, options?: any) {
  return render(
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>,
    options
  )
}
