import { Stack, Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { LogoTitle } from '../../components/LogoTitle'

export default function TabLayout() {
  // const colorScheme = useColorScheme()

  return (
    <Stack>
      <Stack.Screen
        name='index'
        // component={Register}
        options={{
          headerTransparent: true,
          title: '',
          headerRight: (props) => <LogoTitle {...props} />,
          statusBarHidden: true,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name='login'
        // component={Login}
        options={{
          headerTransparent: true,
          title: '',
          headerRight: (props) => <LogoTitle {...props} />,
          statusBarHidden: true,
        }}
      />
      <Stack.Screen
        name='home'
        options={{ headerShown: false, statusBarHidden: true }}
      />
      <Stack.Screen name='+not-found' />
    </Stack>
  )
}
