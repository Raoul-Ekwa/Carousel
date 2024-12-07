import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import photoData from '../datas/photos.json';


const data = photoData;

const { width } = Dimensions.get('window');

const CarouselComponent = () => {
  const renderItem = ({ item }: { item: string }) => {
    if (!item) return null; // Évite des erreurs si `item` est indéfini
    return (
      <View style={styles.card}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.section}>
          <Text style={styles.title}>{item.name}</Text>
          <Carousel
            data={item.images}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width * 0.8}
            loop={true}
          />
          <Text style={styles.details}>
            Modèle : {item.modele} | Prix : {item.prix} FCFA
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  details: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});

export default CarouselComponent;
