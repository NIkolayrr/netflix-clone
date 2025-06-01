jest.mock('redux-devtools-expo-dev-plugin', () => {
  return () => (next: any) => (reducer: any, initialState: any) => next(reducer, initialState)
})

jest.mock('@expo/vector-icons/Ionicons', () => 'Icon')
