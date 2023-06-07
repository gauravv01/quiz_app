import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText="Home"/>
      <View style={styles.bannerContainer}>
        <Image
            source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    banner: {
      height: 300,
      width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    button: {
      width: '100%',
      backgroundColor: '#184E77',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 30,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'white',
    }
})