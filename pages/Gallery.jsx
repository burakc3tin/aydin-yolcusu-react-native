import React from 'react';
import { View, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Gallery({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/aydin/resim1.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../assets/images/aydin/resim2.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/images/aydin/resim3.png')}
          style={styles.image}
        />
         <Image
          source={require('../assets/images/aydin/resim4.jpg')}
          style={styles.image}
        />
          <Image
          source={require('../assets/images/aydin/resim5.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../assets/images/aydin/resim6.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../assets/images/aydin/resim7.jpg')}
          style={styles.image}
        />
         <Image
          source={require('../assets/images/aydin/resim8.jpg')}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingBottom: height * 0.05,
    backgroundColor: '#cfe2f3',
  },
  image: {
    width: width * 0.95,
    height: height / 2.1,
    resizeMode: 'cover',
    margin: height * 0.02,
    borderRadius: 10,
  },
});
