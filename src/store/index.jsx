import {configureStore} from '@reduxjs/toolkit';
import auth from './AuthReducer';
const store = configureStore({
  reducer: {auth},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCkeck: false}),
});
export {store};
