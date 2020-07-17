import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListContactScreen from './src/app/list-contact/list-contact-screen';
import AddContactScreen from './src/app/add-contact/add-contact-screen';
import DetailContactScreen from './src/app/detail-contact/detail-contact-screen';
import EditContactScreen from './src/app/edit-contact/edit-contact-screen';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ListContact"
            component={ListContactScreen}
            options={{
              title: 'Contacts',
              headerStyle: {
                backgroundColor: '#28aba2',
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
                backgroundColor: '#28aba2',
                height: 65,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="DetailContact"
            component={DetailContactScreen}
            options={{
              title: 'Detail Contacts',
              headerStyle: {
                backgroundColor: '#28aba2',
                height: 65,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                textAlign: 'center',
              },
            }}
          />
          <Stack.Screen
            name="EditContact"
            component={EditContactScreen}
            options={{
              title: 'Edit',
              headerStyle: {
                backgroundColor: '#28aba2',
                height: 65,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                textAlign: 'center',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
