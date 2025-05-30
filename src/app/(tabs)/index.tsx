import { useAppSelector } from '@/src/hooks/useTypedSelector'
import useStyles from '@/src/styles/home/styles'
import { useTheme } from '@/src/theme/ThemeProvider'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../../components/CategoryList/CategoryList'
import FeaturedShow from '../../components/FeaturedShow/FeaturedShow'

export default function Index() {
  const GRADIENT_HEIGHT = 200
  const { theme } = useTheme()
  const { mode } = useAppSelector((s) => s.theme)
  const isDarkMode = mode === 'dark'
  const styles = useStyles(theme, GRADIENT_HEIGHT)
  const categories = [
    { title: 'Drama', query: 'drama' },
    { title: 'Action', query: 'action' },
    { title: 'Comedy', query: 'comedy' },
  ]

  return (
    <SafeAreaView edges={['bottom', 'top']} style={styles.container}>
      {isDarkMode ? (
        <View style={[styles.gradientContainer]}>
          <LinearGradient colors={[theme.colors.accent, `${theme.colors.background}00`]} style={styles.gradient} />
        </View>
      ) : null}
      <ScrollView>
        <FeaturedShow />
        {categories.map((category) => (
          <CategoryList key={category.query} title={category.title} query={category.query} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
