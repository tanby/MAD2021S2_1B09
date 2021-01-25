/**
 * @format
 */

import {AppRegistry} from 'react-native';
// redirect to App.js in subfolder
//import App from './Practical07/App';
//import App from './Lesson8/App';
//import App from './Navigation/NavApp';
import App from './Firebase/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
