import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions,ScrollView } from 'react-native';
import data from '../data/data.js';

const { width, height } = Dimensions.get('window');

const PlaceDetails = ({ route }) => {

   const { id } = route.params;

   const selectedPlace = data.tumVeriler.yemeicme.find(place => place.id === id);

  return (
    <ScrollView>
    <View style={styles.container}>
    
      <Image source={selectedPlace.image} style={styles.image} />
      <View style={styles.defineContainer}>
        <Text>{selectedPlace.title}</Text>
    <Text>{selectedPlace.star}</Text>
      </View>
      <Text style={styles.text}>{selectedPlace.text}</Text>
      <View style={styles.textContainer}>
   <Text style={styles.paragraph}>{selectedPlace.explain}</Text>

</View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom:height*0.05,
        backgroundColor:'#cfe2f3'
      },
      image: {
        width: width * 0.95,
        height: height / 2.1,
        resizeMode: 'cover',
        margin: height * 0.02,
        borderRadius: 10,
      },
 
  defineContainer:{
    width: width * 0.95,
    height: height / 10,
    borderRadius:10,
    backgroundColor:'#aed4f6',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:height*0.02
  },
  textContainer: {
    marginHorizontal: width * 0.028,
    
  },
  text: {
    fontSize: height*0.03,
    fontWeight: 'bold',
    marginBottom: height*0.01,
    color: '#333', 
  },
  paragraph: {
    fontSize: height*0.025,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#555', 
  },
  
});

export default PlaceDetails;
