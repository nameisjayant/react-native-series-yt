/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  AppButton,
  AppFlatListView,
  AppImage,
  AppModals,
  AppText,
  AppTextField,
  UseEffectView,
  UseStateView,
} from './src/components';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        {/* <AppText />
        <AppButton />
        <AppImage />
        <AppTextField /> */}
        {/* <UseStateView /> */}
        {/* <UseEffectView /> */}
        {/* <AppFlatListView /> */}
        <AppModals/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
});

export default App;
