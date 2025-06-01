import { ThemeProvider } from '@/src/theme/ThemeProvider'
import { Provider } from 'react-redux'
import { createMockStore, defaultMockState } from './renderWithProviders'

const PerformanceProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const testStore = createMockStore(defaultMockState)
  return (
    <Provider store={testStore}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}

export default PerformanceProviderWrapper
