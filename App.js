import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/home/HomeScreen';
import Shopping from './app/components/shopping/Shopping';
import colors from './app/colors';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Shopping: { screen: Shopping },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = () => (<RootStack/>);

export default App;
