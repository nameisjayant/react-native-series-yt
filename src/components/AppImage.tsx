import {Image, StyleSheet} from 'react-native';

const AppImage = () => {
  return (
    <Image
      source={{uri: 'https://picsum.photos/200/300'}}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'red',
  },
});

export default AppImage;
