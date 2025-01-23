import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
  useSharedValue,
  withSpring,
  interpolateColor
} from 'react-native-reanimated';

const ProductCard = ({ product, onAddToCart, onPressCard }) => {
  const cardRef = useRef(null);
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue('#ffffff');

  useEffect(() => {
    scale.value = 1;
    backgroundColor.value = '#ffffff';
  }, [scale, backgroundColor]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        scale.value,
        [1, 1.1],
        ['#ffffff', '#f0f0f0']
      ),
    };
  }, [scale, backgroundColor]);

  const handlePressIn = () => {
    scale.value = withSpring(1.1);
    backgroundColor.value = '#f0f0f0';
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    backgroundColor.value = '#ffffff';
    onPressCard(product)
  };
  
  return (
    <Animated.View style={[styles.productCard, animatedStyle]}>
    <TouchableOpacity
    // style={styles.productCard}
    style={{alignItems:'center'}}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    activeOpacity={0.8} // Optional: Adjust the opacity when pressed
  >
     <FastImage source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <View style={styles.ratingContainer}>
        {/* <Text style={styles.ratingText}>⭐⭐⭐⭐⭐</Text> Replace with actual rating */}
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCart(product)}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    </Animated.View>
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
