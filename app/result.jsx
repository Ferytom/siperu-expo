import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'

export default function ResultScreen() {
  const router = useRouter()
  const { result } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/siperu.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.result}>Your Learning Style: {result}</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => router.push('/quiz')}>
        <Text style={styles.navButtonText}>Retake Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => router.replace('/login')}>
        <Text style={styles.navButtonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012060',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    marginVertical: 5,
    borderRadius: 25,
    width: '80%',
  },
  navButtonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
})
