import {configureStore} from '@reduxjs/toolkit';
import language from './LanguageReducer';
const store = configureStore({
  reducer: {language},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCkeck: false}),
});
export {store};
