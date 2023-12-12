import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Federated } from '@callstack/repack/client';

function HomeScreen({navigation}: {navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='click here' onPress={() => {
        navigation.navigate("App2");
      }}/>
    </View>
  );
}

function App2() {
  const Ap = React.lazy(() => Federated.importModule('app2', './App'));
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Ap/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;