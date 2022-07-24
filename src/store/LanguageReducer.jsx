import {I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {createSlice} from '@reduxjs/toolkit';
const {i18n} = useTranslation();

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: I18nManager.isRTL ? 'ar' : 'en',
  },
  reducers: {
    changeLanguage: (state, action) => {
      let language = action.payload;
      state.language = language;
      i18n
        .changeLanguage(language)
        .then(() => I18nManager.forceRTL(language === 'ar'));
      RNRestart.Restart();
    },
  },
});
export default languageSlice.reducer;
export const {changeLanguage} = languageSlice.actions;
