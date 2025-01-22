// src/screens/ProductScreen.tsx

import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ProductCard from '../components/ProductCard';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';
import { useProductViewModel } from '../viewmodels/useProductViewModel';

const ProductScreen = (props) => {
  // Extract products, loading and error states from the custom hook
  const {navigation} = props
  const { products, isLoading, error } = useProductViewModel();

  const handleAddToCart = (product,e) => {
    alert(`Added ${product.title} to cart!`);
  };
  const handleCardPress = (product) => {
    navigation.navigate('ProductDetails', { productId: product.id });
  };

  // Loading and Error State Management
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display products in two columns
        contentContainerStyle={styles.productList}
        initialNumToRender={10}
        maxToRenderPerBatch={15}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onAddToCart={handleAddToCart} 
            onPressCard={handleCardPress}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Background color for the screen
    paddingTop: 10, // Padding for top of the screen
  },
  productList: {
    padding: 10,
    justifyContent: 'space-between',
  },
});

export default ProductScreen;
