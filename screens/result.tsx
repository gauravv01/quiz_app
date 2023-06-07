import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const resultBanner = score > 10 ? 'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png' :
  'https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png';
  return (
    <View style={styles.container}>
      <Title titleText="Result" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
            source={{uri: resultBanner}}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default Result

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
  scoreValue: {
    fontSize: 24,
    fontWeight: "800",
    alignSelf: 'center'
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