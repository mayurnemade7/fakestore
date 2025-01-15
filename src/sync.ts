import axios from 'axios';
import { getOrders } from './store/db';
import { getNetworkStatus } from './network';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Example API

// Sync data with the backend
export const syncDataWithBackend = async (): Promise<void> => {
  try {
    const isOnline = await getNetworkStatus();
    if (!isOnline) {
      console.log('Offline: Skipping data sync');
      return;
    }

    const orders = await getOrders();
    if (orders.length > 0) {
      for (let order of orders) {
        const response = await axios.post(API_URL, {
          product_name: order.product_name,
          quantity: order.quantity,
          status: order.status,
        });
        console.log('Order synced to backend:', response);
      }
    }
  } catch (error) {
    console.error('Error syncing data with backend:', error);
  }
};
