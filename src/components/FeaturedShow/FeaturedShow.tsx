import { useGetMovieByIdQuery } from '@/src/store/api'
import { ImageBackground } from 'expo-image'
import { View } from 'react-native'
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { useTheme } from '../../theme/ThemeProvider'
import Button from '../Button'
import { useStyles } from './styles'

export default function FeaturedShow() {
  const { movie } = useAppSelector((s) => s.featured)
  const { theme } = useTheme()
  const styles = useStyles(theme)

  const featured = useAppSelector((state) => state.featured.movie)

  const { data: fullMovie, isLoading } = useGetMovieByIdQuery(featured?.imdbID!, {
    skip: !featured,
  })

  if (!featured) return null
  if (!movie) {
    return null
  }

  const handlePlay = () => {}

  return (
    <View style={styles.container}>
      <ImageBackground source={movie.Poster} contentFit='cover' style={styles.image}>
        <View style={styles.overlay}>
          <Animated.Text entering={FadeInUp} style={styles.heading}>
            {fullMovie?.Title}
          </Animated.Text>
          <Animated.Text numberOfLines={3} entering={FadeIn} style={styles.caption}>
            {fullMovie?.Plot}
          </Animated.Text>
          <View style={styles.actionButtons}>
            <Button title='Play' icon='play' onPress={handlePlay} style={styles.playButton} />
            <Button title='My List' variant='secondary' icon='add-sharp' onPress={handlePlay} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
