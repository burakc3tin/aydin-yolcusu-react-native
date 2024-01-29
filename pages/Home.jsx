import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import Thumbnail from '../components/Thumbnail';
import data from '../data/data.js';
import MarqueeView from 'react-native-marquee-view';

const { width, height } = Dimensions.get('window');

const renderCategoryName = (category) => {
  let categoryName = category;
  if (categoryName !== 'genelbilgiler') {
    switch (category) {
      case 'gezilecekyerler':
        categoryName = 'Gezilecek Yerler';
        break;
      case 'yemeicme':
        categoryName = 'Yeme-İçme';
        break;
      case 'galeri':
        categoryName=''
        break;
      default:
        break;
    }

    return categoryName;
  }
};

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const Home = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          'https://api.weatherapi.com/v1/current.json?key=fedff82e0c21450c801111020210708&q=Aydin'
        );

        if (!response.ok) {
          throw new Error('API request hatası');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Veri hatası', error);
      }
    };

    fetchWeatherData();
  }, []);

  const filteredData = Object.keys(data.tumVeriler).reduce((filtered, category) => {
    filtered[category] = data.tumVeriler[category].filter(item =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtered;
  }, {});

  return (
    <ImageBackground
      source={require('../assets/images/background5.jpg')}
      style={styles.container}
    >
      {weatherData && (
        <ImageBackground style={styles.weatherContainer} source={require('../assets/images/background5.jpg')}>
          <Image
            style={styles.weatherIcon}
            source={{ uri: `https:${weatherData.current.condition.icon}` }}
          />
          <Text style={styles.city}>Aydın</Text>
          <Text style={styles.degree}>{`${weatherData.current.temp_c}°C`}</Text>
        </ImageBackground>
      )}

      <MarqueeView
        speed={0.1}
        delay={0}
        style={styles.marqueetext}>
        <Text style={styles.marqueetextstyle}>İLÇELER: Efeler-
          Kuşadası-
          Söke-
          Nazilli-
          Didim-
          İncirliova-
          Germencik-
          Koçarlı-
          Karacasu-
          Kuyucak-
          Sultanhisar-
          Yenipazar-
          Bozdoğan</Text>
      </MarqueeView>

      <TextInput
        style={styles.searchInput}
        placeholder="Arama yapın..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <ScrollView showsHorizontalScrollIndicator={false}>
        {Object.keys(filteredData).map((category) => {
          const categoryData = filteredData[category];
          if (categoryData.length > 0) {
            return (
              <View key={category} style={{ alignItems: 'center' }}>
                <Text style={styles.topic}>{renderCategoryName(category)} </Text>
                <ScrollView key={`ScrollView_${category}`} horizontal={true} showsHorizontalScrollIndicator={false}>
                  {categoryData.map((item) => (
                    <Thumbnail
                      key={item.id}
                      id={item.id}
                      navigation={navigation}
                      image={item.image}
                      text={item.text}
                      veriSayisi={categoryData.length}
                      randomValue={getRandomNumber(0.50, 0.80)}
                      category={category}
                    />
                  ))}
                </ScrollView>
              </View>
            );
          } else {
            return null; // Kategoriden hiç veri gelmediyse, o başlığı gösterme
          }
        })}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  weatherContainer: {
    backgroundColor: '#9fdfff',
    width: width,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: height / 4,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: height * 0.03
  },

  weatherIcon: {
    width: width * 0.2,
    height: height * 0.13,
  },
  topic: {
    fontSize: height * 0.03,
    letterSpacing: 2,
    color: 'white',
    fontWeight: '300',
    marginBottom: height * 0.02,
  },
  city: {
    fontSize: height * 0.04,
    letterSpacing: 3,
    fontWeight: '300'
  },
  degree: {
    fontSize: height * 0.03,
    fontWeight: '600'
  },
  marqueetext: {
    width: width * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marqueetextstyle: {
    color: 'white',
    fontSize: height * 0.025
  },
  districts: {
    backgroundColor: 'brown'
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: width * 0.8,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Home;
