/**
 * @format
 */

import {AppRegistry} from 'react-native';
// redirect to App.js in subfolder
import App from './Practical07/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
