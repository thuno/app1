/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ScriptManager, Script, Federated } from '@callstack/repack/client';

// Add resolver
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  // Create resolve function
  const resolveURL = Federated.createURLResolver({
    containers: {
      app2: 'http://10.0.2.2:6998/[name][ext]',
    },
  });

  // Try to resolve URL based on scriptId and caller
  const url = resolveURL(scriptId, caller);
  if (url) {
    return { url };
  }
});

AppRegistry.registerComponent(appName, () => App);
