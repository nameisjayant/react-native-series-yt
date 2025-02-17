import {StyleSheet, Text} from 'react-native';

const AppText = () => {
  return <Text style={styles.text}>{'Hello world'}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 600,
  },
});

export default AppText;
