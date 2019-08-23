import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Index from './app/src/Index'

AppRegistry.registerComponent(appName, () => Index);
