import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import Icon3 from '@expo/vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

export default function RegisterScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...')
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
        source={require('../assets/images/MASKOT3.png')}
        style={styles.logo}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Daftar</Text>

        <Text style={styles.label}>
          Daftar sekarang dan Belajar Lebih Seru!
        </Text>

        <Link href='/registerForm' asChild>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}>
            <Icon name='mail' size={24} color='#000' />
            <Text style={styles.buttonText}>
              Daftar lebih cepat dengan email
            </Text>
          </TouchableOpacity>
        </Link>

        <Text style={styles.label}>Atau daftar dengan</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name='logo-google' size={24} color='#000' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name='logo-facebook' size={24} color='#000' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name='logo-instagram' size={24} color='#000' />
          </TouchableOpacity>
        </View>

        <Link href='/login' asChild style={styles.link}>
          <TouchableOpacity style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Sudah punya akun?{' '}
              <Text style={styles.loginButton}>Masuk</Text>
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      <TouchableOpacity style={styles.circleButtonLeft}>
        <Text style={styles.circleButtonText}>?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.circleButtonRight}>
        <Icon3 name='multitrack-audio' size={24} color='#000' />
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
    width: '60%',
    height: 175,
    marginBottom: 70,
  },
  content: {
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 35,
    backgroundColor: '#FFD911',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  socialButton: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginTop: 10,
  },
  loginContainer: {
    height: 30,
    borderColor: '#FFD911',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 10,
  },
  loginButton: {
    color: '#FFD911',
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

// export default Register
