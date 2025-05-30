import { useTheme } from '@/src/theme/ThemeProvider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Tabs, useNavigation } from 'expo-router'

export default function TabLayout() {
  const { theme } = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.text,
        tabBarStyle: { backgroundColor: theme.colors.background },
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: { color: theme.colors.text },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name='account'
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='person-circle-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name='details/[id]'
        options={{
          headerStyle: { backgroundColor: theme.colors.background },
          headerTitle: () => '',
          href: null,
          headerLeft: () => {
            const navigation = useNavigation()
            return (
              <Ionicons
                name='chevron-back'
                size={24}
                color={theme.colors.text}
                style={{ paddingLeft: 16 }}
                onPress={() => navigation.goBack()}
              />
            )
          },
        }}
      />
    </Tabs>
  )
}
