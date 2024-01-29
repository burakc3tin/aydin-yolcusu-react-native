import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function Thumbnail({id,navigation, image, text, veriSayisi,randomValue,category }) {
  const componentWidth = veriSayisi > 1 ? width * randomValue : width * 0.96;

  const handlePress = () => {
    // Kategoriye göre doğru sayfaya yönlendirme
    switch (category) {
      case 'genelbilgiler':
        navigation.navigate('Detail', { image, text, veriSayisi });
        break;
      case 'yemeicme':
        navigation.navigate('Places', { id: id });
        break;
        case 'gezilecekyerler':
        navigation.navigate('Touristic', { id: id });
        break;
        case 'gezilecekyerler':
          navigation.navigate('Touristic', { id: id });
          break;
          case 'galeri':
            navigation.navigate('Gallery', { id: id });
            break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.componentContainer, { width: componentWidth }]}>
      <ImageBackground source={image} style={styles.imageBackground} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  componentContainer: {
    height: height / 3.5,
    margin: height * 0.005,
    marginBottom:height*0.02,
    overflow: 'hidden',
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center', 
    opacity: 0.7,
    borderRadius: 10, 
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: height * 0.025,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    fontStyle:'italic',
    fontFamily: 'Arial',
  },
});

