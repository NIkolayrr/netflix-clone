import { MovieList } from '@/src/components'
import { useAppSelector } from '@/src/hooks/useTypedSelector'
import { selectFavoriteMovies } from '@/src/store/selectors'
import useStyles from '@/src/styles/account/styles'
import { useTheme } from '@/src/theme/ThemeProvider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from 'expo-router'
import { Switch, Text, View } from 'react-native'

export default function Account() {
  const { theme, toggleScheme } = useTheme()
  const { mode } = useAppSelector((s) => s.theme)
  const favoriteMovies = useAppSelector(selectFavoriteMovies)
  const styles = useStyles(theme)

  return (
    <View style={styles.container}>
      <View style={[styles.switchContainer, { justifyContent: 'space-between' }]}>
        <Text style={styles.themeMode}>Theme: {mode}</Text>
        <View style={[styles.switchContainer]}>
          <Ionicons name={mode === 'dark' ? 'moon' : 'sunny'} style={styles.icon} />
          <Switch
            value={mode === 'dark'}
            onValueChange={() => toggleScheme(mode)}
            trackColor={{ false: '#ccc', true: theme.colors.text }}
            thumbColor={theme.colors.accent}
          />
        </View>
      </View>
      <MovieList
        title={'My List'}
        movies={Object.values(favoriteMovies) ?? []}
        onItemPress={(movie) => {
          router.push(`./details/${movie.imdbID}`)
        }}
      />
    </View>
  )
}
