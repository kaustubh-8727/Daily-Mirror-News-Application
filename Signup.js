import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert} from 'react-native';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import * as firebase from 'firebase';

export default class Signup extends React.Component {
  state={
    email:'',
    password:''
  }
  usersignup(email,pass){
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(()=>{
      this.props.navigation.navigate("Home");
    })
    .catch(err=>{
      Alert.alert(err.message);
    })
  }
  render(){
  return (
    <View style={styles.container}>
      <Item floatingLabel style={{borderBottomColor:'red'}}>
          <Label>Email</Label>
          <Input
          value={this.state.email} style={{color:'white'}} onChangeText={(text)=>this.setState({email:text})} />
      </Item>
      <Item floatingLabel style={{borderBottomColor:'red'}}>
          <Label>Password</Label>
          <Input
          secureTextEntry={true}
          value={this.state.password} style={{color:'white'}} onChangeText={(text)=>this.setState({password:text})} />
      </Item>
      <Button full rounded danger onPress={()=>this.usersignup(this.state.email,this.state.password)} style={{margin:10,justifyContent:'center'}} >
      <Text style={{fontSize:25,color:'white'}}>Sign Up</Text>
      </Button>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
      <Text style={{textAlign:'center',color:'white'}}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent:'flex-start',
    padding:10
  },
});
