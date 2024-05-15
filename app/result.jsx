import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'

export default function ResultScreen() {
  const router = useRouter()
  const { result } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.result}>Your Learning Style: {result}</Text>
      <Button
        title='Retake Quiz'
        onPress={() => router.push('/quiz')}
      />
      <Button title='Go Home' onPress={() => router.push('/')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    marginBottom: 20,
  },
})
