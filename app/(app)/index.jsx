import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

import { SearchBar, Card } from '@rneui/themed'

import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Icon2 from '@expo/vector-icons/Ionicons'
import Icon3 from '@expo/vector-icons/MaterialIcons'

export default function HomeScreen() {
  const [name, setName] = useState('')

  const getName = async () => {
    try {
      const name = await AsyncStorage.getItem('name')
      if (name !== null) setName(name)
    } catch (error) {
      setName(error)
    }
  }

  useEffect(() => {
    getName()
  }, [])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.profileContainer}>
          <Icon
            name='human-greeting-variant'
            size={48}
            color='#fff'
          />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Selamat Datang</Text>
            <Text style={styles.nameText}>{name}</Text>
            <Icon name='star' size={12} color='#FFD911' />
          </View>
        </View>

        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Register')}>
            <Icon2 name='notifications' size={24} color='#000' />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Register')}>
            <Icon3 name='question-mark' size={24} color='#000' />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('Register')}>
            <Icon2 name='settings' size={24} color='#000' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar
          placeholder='Cari materi dan soal yang ingin kamu pelajari!'
          platform='android'
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
        />
        <Image
          source={require('../../assets/images/tune.png')}
          style={styles.tune}
        />
        {/* <Icon3 name="display-settings" size={40} color="#FFD911" /> */}
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Golongan Unsur</Text>
        <ScrollView horizontal={true} style={styles.groupView}>
          <Card containerStyle={styles.card}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/hidrogen.png`)}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Golongan 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardTextContainer}>
              <Text style={styles.cardText}>
                Pelajari lebih lanjut
              </Text>
            </TouchableOpacity>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/hidrogen.png`)}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Golongan 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardTextContainer}>
              <Text style={styles.cardText}>
                Pelajari lebih lanjut
              </Text>
            </TouchableOpacity>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/hidrogen.png`)}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Golongan 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardTextContainer}>
              <Text style={styles.cardText}>
                Pelajari lebih lanjut
              </Text>
            </TouchableOpacity>
          </Card>
        </ScrollView>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>Kumpulan Soal</Text>
        <ScrollView horizontal={true} style={styles.groupView}>
          <Card containerStyle={styles.card}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/star.png`)}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Quiz 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardTextContainer}>
              <Text style={styles.cardText}>
                Pelajari lebih lanjut
              </Text>
            </TouchableOpacity>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/star.png`)}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Quiz 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardTextContainer}>
              <Text style={styles.cardText}>
                Pelajari lebih lanjut
              </Text>
            </TouchableOpacity>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/star.png`)}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Quiz 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardTextContainer}>
              <Text style={styles.cardText}>
                Pelajari lebih lanjut
              </Text>
            </TouchableOpacity>
          </Card>
        </ScrollView>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupTitle}>
          Belanja Modul Lebih Mudah
        </Text>
        <ScrollView horizontal={true} style={styles.groupView}>
          <Card containerStyle={styles.bookCard}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/books.png`)}
            />
            <Text style={styles.bookTitle}>Buku SIPERU Vol. 1</Text>
            <Text style={styles.bookPrice}>Rp 49.999</Text>
          </Card>
          <Card containerStyle={styles.bookCard}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/books.png`)}
            />
            <Text style={styles.bookTitle}>Buku SIPERU Vol. 2</Text>
            <Text style={styles.bookPrice}>Rp 55.000</Text>
          </Card>
          <Card containerStyle={styles.bookCard}>
            <Card.Image
              style={styles.cardImage}
              source={require(`../../assets/images/books.png`)}
            />
            <Text style={styles.bookTitle}>Buku SIPERU Vol. 3</Text>
            <Text style={styles.bookPrice}>Rp 40.000</Text>
          </Card>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: 'blue',
    paddingBottom: 10,
  },
  topBar: {
    width: '100%',
    paddingLeft: 5,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    gap: 0,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 10,
  },
  nameText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFD911',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    width: '87%',
    height: 35,
    backgroundColor: '#FFD911',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputContainer: {
    margin: 0,
    padding: 0,
  },
  input: {
    padding: 0,
    margin: 0,
    fontSize: 14,
  },
  tune: {
    width: 40,
    height: 40,
  },
  groupContainer: {
    margin: 10,
  },
  groupTitle: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  groupView: {
    height: '25%',
  },
  card: {
    borderRadius: 20,
  },
  cardImage: {
    padding: 0,
    width: 120,
    height: 120,
  },
  cardButton: {
    width: '100%',
    height: 35,
    backgroundColor: '#FFD911',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  cardText: {
    fontSize: 10,
    color: '#000',
  },
  bookCard: {
    height: '80%',
    borderRadius: 20,
    backgroundColor: '#FFD911',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  bookPrice: {
    fontSize: 12,
    color: '#000',
  },
})
