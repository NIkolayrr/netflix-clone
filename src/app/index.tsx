import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryList from '../components/CategoryList'
import FeaturedShow from '../components/FeaturedShow'

export default function Index() {
  const categories = [
    { title: 'Trending', query: 'trending' },
    { title: 'Action', query: 'action' },
    { title: 'Comedy', query: 'comedy' },
  ]

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <FeaturedShow />
        {categories.map((category) => (
          <CategoryList key={category.query} title={category.title} query={category.query} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
