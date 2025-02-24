import {Button, Linking, Platform} from 'react-native';

const LinkingView = () => {
  const openWebsite = async () => {
    const url = '13322';
    const isValidUrl = await Linking.canOpenURL(url);
    if (isValidUrl) await Linking.openURL(url);
  };

  const openSettings = () => {
    if (Platform.OS == 'ios') Linking.openURL('app-settings:');
    else Linking.openSettings();
  };

  return <Button title={'open website'} onPress={openSettings} />;
};

export default LinkingView;
