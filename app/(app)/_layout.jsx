import { Redirect, Stack, Tabs } from 'expo-router'
import { useSession } from '../../hooks/authContext'
import { TabBarIcon } from '../../components/navigation/TabBarIcon'

export default function AppLayout() {
  const { session, isLoading } = useSession()

  if (!session) {
    return <Redirect href='/register' />
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='ar'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'camera' : 'camera-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'happy' : 'happy-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
