import React from 'react';
import ReadStoryScreen from './screens/ReadScreen';
import WriteStoryScreen from './screens/WriteScreen';
import ScanScreen from './screens/ScanScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read : {screen: ReadStoryScreen},
  Write : {screen: WriteStoryScreen},
  Scan: {screen : ScanScreen}
});

const AppContainer = createAppContainer(TabNavigator);