import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/reducers/productReducer';
import { getProductDetails } from '../services/api';

const ProductDetailScreen = ({ route }: any) => {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductDetails(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  productImage: { width: 200, height: 200, alignSelf: 'center' },
});

export default ProductDetailScreen;
