import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

// Données JSON des produits
const products = [
  {
    "id": 0,
    "name": "Kateryna Tsurik",
    "images": [
        "https://images.pexels.com/photos/4598665/pexels-photo-4598665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/3131981/pexels-photo-3131981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/3131981/pexels-photo-3131981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/2405648/pexels-photo-2405648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/11701120/pexels-photo-11701120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/3467946/pexels-photo-3467946.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/3450331/pexels-photo-3450331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/4291121/pexels-photo-4291121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/6728528/pexels-photo-6728528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "https://images.pexels.com/photos/8166624/pexels-photo-8166624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",

    ]    
    ,
    "prix": 124350,
    "modele": "Mode xdatel"
}
];

const ProductCarousel = ({ product }) => {
  return (
    <View style={styles.productContainer}>
      {/* Correction de l'accès aux données du produit */}
      <Text style={styles.productName}>{product.name}</Text>
      
      <Carousel
        data={product.images}
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item }} style={styles.carouselImage} />
          </View>
        )}
        sliderWidth={width}
        itemWidth={width - 80} // Ajustez la largeur de l'élément
        loop={true} // Pour permettre un défilement infini
      />
      
      <Text style={styles.price}>Prix: {product.prix}€</Text>
      <Text style={styles.model}>Modèle: {product.modele}</Text>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Correction du nom de variable dans la boucle map */}
      {products.map((product) => (
        <ProductCarousel key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  productContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
  },
  carouselImage: {
    width: '100%',
    height: 250, // Vous pouvez ajuster la hauteur en fonction de votre design
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  model: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
});

export default App;
