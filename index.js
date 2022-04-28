import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';

import App from './App';
import { name as appName } from './app.json';
import './src/i18n/i18n';

AppRegistry.registerComponent(appName, () => App);
