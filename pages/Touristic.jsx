import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import data from '../data/data.js';

const { width, height } = Dimensions.get('window');

const Touristic = ({ route }) => {
  const { id } = route.params;
  const selectedPlace = data.tumVeriler.gezilecekyerler.find(place => place.id === id);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={selectedPlace.image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{selectedPlace.text}</Text>
          <Text style={styles.explanation}>{selectedPlace.explain}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cfe2f3', // Arka plan rengi
   
  },
  image: {
    width: width * 0.95,
    height: height / 2.1,
    resizeMode: 'cover',
    margin: height * 0.02,
    borderRadius: 10,
  },
  contentContainer: {
    margin: width * 0.05,
  },
  title: {
    fontSize: height*0.03,
    fontWeight: 'bold',
    marginBottom: height*0.01,
    color: '#333', 
  },
  explanation: {
    fontSize: height*0.025,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#555', 
  },
});

export default Touristic;
