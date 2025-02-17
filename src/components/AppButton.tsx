import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{'SUBMIT'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 4,
  },
  text: {
    color: '#fff',
  },
});

export default AppButton;
