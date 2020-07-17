import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListContactScreen from './src/app/list-contact/list-contact-screen';
import AddContactScreen from './src/app/add-contact/add-contact-screen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ListContact"
            component={ListContactScreen}
            options={{
              title: 'Contacts',
              headerStyle: {
                backgroundColor: '#3CBDCF',
                height: 65,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                textAlign: 'center'
              },
            }}
          />
          <Stack.Screen
            name="AddContact"
            component={AddContactScreen}
            options={{
              title: 'Add Contacts',
              headerStyle: {
                backgroundColor: '#3CBDCF',
                height: 65,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                textAlign: 'center'
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
