import { useTheme } from '@/src/theme/ThemeProvider'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../../components/CategoryList/CategoryList'
import FeaturedShow from '../../components/FeaturedShow/FeaturedShow'
import useStyles from './styles'

export default function Index() {
  const GRADIENT_HEIGHT = 200
  const { theme } = useTheme()
  const styles = useStyles(theme, GRADIENT_HEIGHT)
  const categories = [
    { title: 'Trending', query: 'trending' },
    { title: 'Action', query: 'action' },
    { title: 'Comedy', query: 'comedy' },
  ]

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={[styles.gradientContainer]}>
        <LinearGradient colors={[theme.colors.accent, `${theme.colors.background}00`]} style={styles.gradient} />
      </View>
      <ScrollView>
        <FeaturedShow />
        {categories.map((category) => (
          <CategoryList key={category.query} title={category.title} query={category.query} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
