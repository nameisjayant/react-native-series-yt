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
    <CloseIcon width={100} height={100} color={'black'} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    // borderRadius: 100,
    // borderWidth: 5,
    // borderColor: 'red',
  },
});

export default AppImage;
