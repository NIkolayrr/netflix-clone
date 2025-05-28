import { Button, Text, View } from 'react-native'
import { useAppSelector } from '../hooks/useTypedSelector'
import { useTheme } from '../theme/ThemeProvider'

export default function FeaturedShow() {
  const { movie } = useAppSelector((s) => s.featured)
  const { mode } = useAppSelector((s) => s.theme)
  const { theme, toggleScheme } = useTheme()

  if (!movie) {
    return null
  }

  return (
    <View
      style={{
        width: '100%',
        height: 400,
        marginHorizontal: theme.spacing.md,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>{movie.Title}</Text>
      <Button title='Switch Theme' onPress={() => toggleScheme(mode)}></Button>
    </View>
  )
}
