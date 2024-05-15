import React from 'react'
import { useStorageState } from './useStorageState'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = React.createContext<{
  signIn: (email: string, password: string) => void
  signOut: () => void
  session?: string | null
  isLoading: boolean
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
})

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error(
        'useSession must be wrapped in a <SessionProvider />'
      )
    }
  }

  return value
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] =
    useStorageState('session')

  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          // Perform sign-in logic here
          if (email === '' || password === '') {
            console.error('Email or password not filled')
            return null
          }

          try {
            const getData = await fetch(
              'https://donactive.vercel.app/api/auth/login',
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email,
                  password,
                }),
              }
            )
            if (getData.status === 200) {
              const results = await getData.json()
              setSession(results.data.token)
              await AsyncStorage.setItem('name', results.data.name)
              await AsyncStorage.setItem('email', results.data.email)
              router.replace('/')
            }
          } catch (error) {
            console.error(error)
          }
          return null
        },
        signOut: () => {
          setSession(null)
        },
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}
