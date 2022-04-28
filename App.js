import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import ThemeProvider from '@contexts/Theme';
import RootNavigator from '@navigation/RootNavigator';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar
        animated
        barStyle="dark-content"
        showHideTransition="fade"
        translucent
        backgroundColor="transparent"
      />
      <ThemeProvider>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;
