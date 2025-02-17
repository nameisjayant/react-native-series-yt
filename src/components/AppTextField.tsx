import {StyleSheet, TextInput} from 'react-native';

const AppTextField = () => {
  return <TextInput style={styles.container} placeholder={'Search here...'} />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingStart: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
});

export default AppTextField;
