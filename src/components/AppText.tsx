import {StyleSheet, Text} from 'react-native';
import {AppFonts} from '../config/fonts';

const AppText = () => {
  return <Text style={styles.text}>{'Hello world'}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 30,
    fontFamily: AppFonts[800],
  },
});

export default AppText;
