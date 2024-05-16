// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from '@react-navigation/native'
import { SessionProvider } from '../hooks/authContext'
import { useFonts } from 'expo-font'
import { Slot, Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

// import { useColorScheme } from '@/hooks/useColorScheme'

import { LogoTitle } from '../components/LogoTitle'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen
          name='register'
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
          name='registerForm'
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
          name='quiz'
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
          name='result'
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
          name='(app)'
          options={{ headerShown: false, statusBarHidden: true }}
        />
      </Stack>
    </SessionProvider>
  )
}
