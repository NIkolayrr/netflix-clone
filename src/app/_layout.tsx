import { store } from '@/src/store/store'
import { ThemeProvider } from '@/src/theme/ThemeProvider'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  )
}
