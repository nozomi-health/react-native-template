import FirstScreen from '@screens/FirstScreen';
import SecondScreen from '@screens/SecondScreen';

export const MAIN_ROUTE = {
  FIRST_SCREEN: 'FirstScreen',
  SECOND_SCREEN: 'SecondScreen',
};

export const MAIN_ROUTES = [
  {
    name: MAIN_ROUTE.FIRST_SCREEN,
    component: FirstScreen,
  },
  {
    initialParams: { title: 'Some header text' }, // can be used later with useRoute()
    name: MAIN_ROUTE.SECOND_SCREEN,
    component: SecondScreen,
  },
  // ex: we can create tab navigator with checks based on user role
];
