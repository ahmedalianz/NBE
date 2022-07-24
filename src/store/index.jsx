import {configureStore} from '@reduxjs/toolkit';
import language from './LanguageReducer';
import auth from './AuthReducer';
const store = configureStore({
  reducer: {language, auth},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCkeck: false}),
});
export {store};
