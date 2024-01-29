import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Detail({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image
        source={require('../assets/images/aydingenel/aydinmerkez.jpg')}
        style={styles.image}
      />
     <Text style={styles.topic}>Coğrafi Konum</Text>
<View style={styles.textContainer}>
  <Text style={styles.paragraph}>
    Aydın, Türkiye'nin batısında Ege Bölgesi'nde konumlanmış bir ildir. Deniz kıyısında bulunan şehir, Ege Denizi'nin kıyısında uzanan verimli topraklara sahiptir. İzmir'e yaklaşık 150 kilometre uzaklıkta olan Aydın, tarihi ve kültürel zenginlikleri ile birlikte doğal güzellikleriyle de ön plana çıkar. Bu coğrafi konum, tarım açısından da oldukça avantajlıdır, çünkü Büyük Menderes Nehri'nin suladığı topraklar verimli tarım alanları oluşturur.
  </Text>
</View>

<Text style={styles.topic}>Tarih ve Antik Dönem</Text>
<View style={styles.textContainer}>
  <Text style={styles.paragraph}>
    Aydın, antik dönemde "Tralleis" adıyla anılan bir yerleşim yeridir. Lidyalılar, Persler, Romalılar ve Bizanslılar gibi birçok medeniyetin izlerini taşımaktadır. Antik döneme ait kalıntılar arasında Afrodisyas Antik Kenti, Didyma ve Milet gibi önemli tarihi alanlar bulunmaktadır. Aydın, tarih boyunca stratejik bir konuma sahip olarak, ticaret yollarının kavşak noktasında yer almasıyla da öne çıkmıştır.
  </Text>
</View>

<Text style={styles.topic}>Osmanlı Dönemi</Text>
<View style={styles.textContainer}>
  <Text style={styles.paragraph}>
    Osmanlı İmparatorluğu'nun egemenliği altında Aydın, Osmanlı yönetiminin önemli idari merkezlerinden biri olmuştur. Aydın Beyliği'nin kurucusu Aydın Bey'in adını taşıyan şehir, Osmanlı döneminde kültürel ve ticaret açısından da gelişmiştir. Bu döneme ait tarihi yapılar şehirde hala gözlemlenebilmektedir.
  </Text>
</View>

<Text style={styles.topic}>Ekonomi ve Tarım</Text>
<View style={styles.textContainer}>
  <Text style={styles.paragraph}>
    Aydın'ın ekonomisi, tarımın yanı sıra sanayi ve ticaretle de şekillenmiştir. Verimli toprakları, zeytin, incir, pamuk gibi tarım ürünlerinin yetişmesine olanak tanır. Bu ürünler, hem iç pazarda hem de dış ticarette önemli bir rol oynamaktadır. Ayrıca, tarım sektörüyle bağlantılı olarak gıda ve tarım endüstrisi de şehir ekonomisinde etkilidir.
  </Text>
</View>

<Text style={styles.topic}>Kültür ve Turizm</Text>
<View style={styles.textContainer}>
  <Text style={styles.paragraph}>
    Aydın, kültürel mirası ve turistik değerleri ile dikkat çeker. Antik dönemden günümüze uzanan tarihi kalıntılar, müzeler ve doğal güzellikler şehri turistler için cazip kılar. Afrodisyas Antik Kenti, Didyma Tapınağı, Aydın Müzesi gibi noktalar, ziyaretçilere zengin bir kültür ve tarih deneyimi sunar.
  </Text>
</View>

<Text style={styles.topic}>Modern Aydın</Text>
<View style={styles.textContainer}>
  <Text style={styles.paragraph}>
    Günümüzde Aydın, modern altyapısı, gelişen ekonomisi ve kültürel etkinlikleriyle bilinir. İzmir'e yakınlığı nedeniyle lojistik bir avantaja sahiptir. Şehir, tarımın yanı sıra sanayi, ticaret ve hizmet sektörlerinde de faaliyet gösterir. Bu şekilde, Aydın hem tarihî mirasını koruyarak hem de modern bir yaşam tarzı sunarak dikkat çeker.
  </Text>
</View>

      </View>
    </ScrollView>
  );
}

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
  textContainer: {
    marginHorizontal: width * 0.028, 
  },
  topic: {
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
