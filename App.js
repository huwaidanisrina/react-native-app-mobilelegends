import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ justifyContent:'center', alignItems:'center'}}>

        <Image source={require('./ML_logo.png')} style={{width:378,height:284,marginTop:50}}/>
          <Text style={{fontSize:20}}>Welcome to Mobile Legends Heroes</Text>
          <Text>Start Exploring / Creating Your Favourite Heroes Here</Text>
          <Button
              title='START'
              onPress={()=> this.props.navigation.navigate('Details')}></Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Image
    style={{height:128,width:128}}
    source={require('./freya.jpg')}/>
    <Text style={{fontSize:30}}>EUDORA</Text>
    <Text style={{fontSize:20}}>Lightning Sorceress</Text>
    <Text>HP : 2524</Text>
    <Text>Mana : 468</Text>
    <Text>Movement Speed : 250</Text>
    <Text>Physical Attack : 112</Text>
    <Text>Armor : 19</Text>
    <Text>Magic Resistance : 10</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Text>huwahwaudw</Text>
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
    initialRouteName: 'Home',

});