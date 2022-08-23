import React from 'react';
import {View} from 'react-native';
import styles from './AppBar.styles';
import AppBarIcon from './AppBarIcon';

const WithIcons = Component => props => {
  return <Component>{props.children}</Component>;
};
function AppBarContainer(props) {
  return <View style={styles.container}>{props.children}</View>;
}
const AppBar = WithIcons(AppBarContainer);
AppBar.Start = function ({children}) {
  return <View style={styles.absoluteLeft}>{children}</View>;
};
AppBar.End = function ({children}) {
  return <View style={styles.absoluteRight}>{children}</View>;
};

AppBar.Icon = AppBarIcon;

export default AppBar;
