import { store } from '@/src/store/store'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../theme/ThemeProvider'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack />
      </ThemeProvider>
    </Provider>
  )
}
