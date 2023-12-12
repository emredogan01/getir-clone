import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: '15%',
  },
});

export default App;
