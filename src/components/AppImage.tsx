import {Image, StyleSheet} from 'react-native';
import {CloseIcon} from '../assets/images';

const AppImage = () => {
  return (
    // <Image
    //   source={{uri: 'https://picsum.photos/200/300'}}
    //   style={styles.image}
    // />
    // <Image
    //   source={require('../assets/images/CalendarIcons.png')}
    //   style={styles.image}
    // />
    <CloseIcon />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    // borderRadius: 100,
    // borderWidth: 5,
    // borderColor: 'red',
  },
});

export default AppImage;
