import NetInfo from '@react-native-community/netinfo';

// Get the network status
export const getNetworkStatus = async (): Promise<boolean> => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
