import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ProductCard from '../components/ProductCard';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';
import useProductViewModel from '../viewmodels/ProductViewModel';


const ProductScreen = () => {
  const { products, isLoading, error } = useProductViewModel()
  console.log("products---", products)

  const handleAddToCart = (product) => {
    alert(`Added ${product.title} to cart!`);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.productList}
      initialNumToRender={10}
      maxToRenderPerBatch={15}
      renderItem={({ item }) => (
        <ProductCard product={item} onAddToCart={handleAddToCart} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: 10,
  },
});

export default ProductScreen;
