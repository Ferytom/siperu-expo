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
import { router } from 'expo-router'

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleRegister = async () => {
    setIsLoading(true)
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      console.error('Email or password not filled')
      return null
    }

    try {
      const getData = await fetch(
        'https://donactive.vercel.app/api/auth/register',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      )
      if (getData.status === 200) {
        const results = await getData.json()
        console.log(results)
        router.replace('/login')
      }
    } catch (error) {
      console.error(error)
    }
    router.replace('/login')
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
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your first name'
          placeholderTextColor='white'
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your last name'
          placeholderTextColor='white'
          value={lastName}
          onChangeText={setLastName}
        />

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

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRegister()}>
          <Text style={styles.buttonText}>
            {isLoading ? <ActivityIndicator /> : 'Daftar'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.circleButtonLeft}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.circleButtonText}>?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.circleButtonRight}
        onPress={() => navigation.navigate('Register')}>
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
