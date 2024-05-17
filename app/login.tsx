import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSession } from '../hooks/authContext'
import { router } from 'expo-router'

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const { signIn } = useSession()

  const handleLogin = () => {
    setIsLoading(true)
    signIn(email, password)
  }

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password')
  }

  return (
    <LinearGradient
      colors={['#0F2BAC', '#22006C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <Image
        source={require('../assets/images/siperu.png')}
        style={styles.logo}
      />

      <View style={styles.content}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your email'
          placeholderTextColor='white'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password'
          placeholderTextColor='white'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.actionContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={handleRememberMe}>
              {rememberMe && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Ingat saya</Text>
          </View>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>
              Lupa kata sandi?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>
            {isLoading ? <ActivityIndicator /> : 'Masuk'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.circleButtonLeft}
        onPress={() => router.navigate('Register')}>
        <Text style={styles.circleButtonText}>?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.circleButtonRight}
        onPress={() => router.navigate('Register')}>
        <Icon name='multitrack-audio' size={24} color='#000' />
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    marginBottom: 20,
  },
  content: {
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#FFD911',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circleButtonLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  circleButtonRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  circleButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

// export default Login
