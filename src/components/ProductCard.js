import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <View style={styles.productCard}>
     <FastImage source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <View style={styles.ratingContainer}>
        {/* <Text style={styles.ratingText}>⭐⭐⭐⭐⭐</Text> Replace with actual rating */}
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(product)}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    margin: 10,
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e47911',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 12,
    color: '#f8c92d',
  },
  addToCartButton: {
    backgroundColor: '#111',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: '100%',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default React.memo(ProductCard); // Memoization for performance
