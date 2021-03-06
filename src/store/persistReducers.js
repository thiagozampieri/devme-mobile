import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'devMe',
      storage: AsyncStorage, // This config is nedeed to mobile env
      blacklist: ['categories', 'posts', 'comments'], // Do not persist reducers in blackList
    },
    reducers,
  );

  return persistedReducer;
};
