import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export default class Loading extends React.Component {
  componentDidMount(){
    this.unsuscribeAuth=firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.navigation.navigate("Home");
      }
      else{
        this.props.navigation.navigate("Login");
      }
    })
  }
componentWillUnmount(){
    this.unsuscribeAuth()
  }
  render(){
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent:'center',
    padding:10
  },
});
