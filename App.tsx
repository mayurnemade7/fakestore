import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; // Import Provider
import { store, persistor } from './src/store'; // Import your store
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import { PersistGate } from 'redux-persist/integration/react'; // For Redux Persist support
import ProductScreen from './src/screens/ProductScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your app in the Provider */}
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={ProductScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Alert } from 'react-native';
// import { createTable, insertOrder, getOrders, deleteOrder } from './src/store/db'
// import { syncDataWithBackend } from './src/sync';
// import { getNetworkStatus } from './src/network';

// const App = () => {
//   const [orders, setOrders] = useState<any[]>([]);

//   useEffect(() => {
//     const init = async () => {
//       await createTable(); // Ensure the table is created
//       await syncDataWithBackend(); // Sync data when the app starts
//       await fetchOrders();
//     };
//     init();
//   }, []);

//   const fetchOrders = async () => {
//     const orders = await getOrders();
//     setOrders(orders);
//   };

//   const addOrder = async () => {
//     const order = { product_name: 'Product A', quantity: 10, status: 'Pending' };
//     await insertOrder(order);
//     await fetchOrders();
//   };

//   const deleteOrderFromDB = async (id: number) => {
//     await deleteOrder(id);
//     await fetchOrders();
//   };

//   const checkConnectivityAndSync = async () => {
//     const isOnline = await getNetworkStatus();
//     if (isOnline) {
//       await syncDataWithBackend();
//       Alert.alert('Data synced with backend!');
//     } else {
//       Alert.alert('You are offline. Data will be synced later.');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Online Storage with React Native & TypeScript</Text>
//       <Button title="Add Order" onPress={addOrder} />
//       <Button title="Check Connectivity & Sync" onPress={checkConnectivityAndSync} />
      
//       <Text>Orders:</Text>
//       {orders.map((order) => (
//         <View key={order.id} style={{ marginVertical: 10 }}>
//           <Text>{`Product: ${order.product_name}, Quantity: ${order.quantity}, Status: ${order.status}`}</Text>
//           <Button title="Delete" onPress={() => deleteOrderFromDB(order.id)} />
//         </View>
//       ))}
//     </View>
//   );
// };

// export default App;

