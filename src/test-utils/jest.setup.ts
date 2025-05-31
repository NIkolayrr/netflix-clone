jest.mock('redux-devtools-expo-dev-plugin', () => {
  return () => (next: any) => (reducer: any, initialState: any) => next(reducer, initialState)
})

jest.mock('../theme/ThemeProvider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,

  useTheme: () => ({
    theme: {
      colors: {
        background: '#000',
        text: '#fff',
        primary: '#1E90FF',
      },
      spacing: {},
      typography: {},
    },
    toggleScheme: jest.fn(),
  }),
}))
