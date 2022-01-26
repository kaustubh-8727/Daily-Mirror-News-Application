import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import cover from './assets/splash.jpg';
export default class Splash extends React.Component {
componentDidMount(){
  setTimeout(()=>{
    this.props.navigation.navigate("rootHome");
  },3000)
}
  render(){
    return(
      <View style={{flex:1}}>
        <Image source={cover} style={{height:'100%',width:'100%'}} />
      </View>
    );
  }
}
