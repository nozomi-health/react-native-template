import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MAIN_ROUTES, MAIN_ROUTE } from '@routes/main';

const MainStack = createNativeStackNavigator();

const StudentNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName={MAIN_ROUTE.FIRST_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      {MAIN_ROUTES.map((item) => (
        <MainStack.Screen key={item.name} {...item} />
      ))}
    </MainStack.Navigator>
  );
};

export default StudentNavigator;
