/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Reactotron from 'reactotron-react-native';
// import { reactotronRedux } from 'reactotron-redux';

// Reactotron.configure()
//   .use(reactotronRedux())  // Add Redux support
//   .connect();

// // Make Reactotron available globally (optional)
// console.tron = Reactotron;

// export default Reactotron;

AppRegistry.registerComponent(appName, () => App);
