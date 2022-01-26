import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,Image,ScrollView} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons,Entypo,AntDesign} from '@expo/vector-icons';
import { Button,Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import * as firebase from 'firebase';
import {firebaseConfig} from './Config';
import * as Expo from 'expo';
import logo from './assets/logo.jpg';

if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
}

export default class Login extends React.Component {
  state={
  email:'',
  password:'',
  username:'',
  confirm_password:'',
  confirm:false,
  signup:false,
  login:false,
  name:''
}

logged(){
  this.setState({login:true});
  this.setState({signup:false});
}
siggned(){
  this.setState({signup:true});
  this.setState({login:false});
}
userlogin(email,password){
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      const newitem=firebase.database().ref('Login');
      newitem.push().set({
      email:email,
      signed_at: Date.now()
      })
      this.setState({name:email});
      Alert.alert("You are sucessfully logged in");
      this.props.navigation.navigate("Home");
    })
    .catch(err=>{
      Alert.alert(err.message);
    })
}
check(text){
  this.setState({confirm_password:text});
  if(text==this.state.password){
    this.setState({confirm:true});
  }
  else{
    this.setState({confirm:false});
  }
}
usersignup(email,pass){
    if(this.state.confirm){
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(()=>{
        const newitem=firebase.database().ref('Signup');
        newitem.push().set({
        username:this.state.username,
        email:email,
        created_at: Date.now()
        })
        this.setState({name:email});
        Alert.alert("You are sucessfully signed in");
        this.props.navigation.navigate("Home");
      })
      .catch(err=>{
        Alert.alert(err.message);
      })
  }
  else{
    Alert.alert("password did not match to confirm password");
  }
}
  render(){
    let logged;
    let signed;
    if(this.state.login){
      logged=<View style={{marginTop:30,margin:10}}>
                  <Item floatingLabel style={{borderBottomColor:'red'}}>
                    <Label>Email</Label>
                    <Input
                    value={this.state.email} style={{color:'black'}} onChangeText={(text)=>this.setState({email:text})} />
                  </Item>
                  <Item floatingLabel style={{borderBottomColor:'red'}}>
                      <Label>Password</Label>
                      <Input
                      secureTextEntry={true}
                      value={this.state.password} style={{color:'black'}} onChangeText={(text)=>this.setState({password:text})} />
                  </Item>
                  <Button full rounded danger onPress={()=>this.userlogin(this.state.email,this.state.password)} style={{margin:10,justifyContent:'center'}}>
                  <Text style={{fontSize:25,color:'white'}}>Login</Text>
                  </Button>
            </View>
    }
    else{
      logged=<Button full rounded danger onPress={()=>this.logged()} style={{margin:10,justifyContent:'center'}}>
            <Text style={{fontSize:25,color:'white'}}>Login</Text>
            </Button>
    }
    if(this.state.signup){
      signed=<View style={{marginTop:30,margin:10}}>
                <Item floatingLabel style={{borderBottomColor:'red'}}>
                    <Label>Full Name</Label>
                    <Input
                    value={this.state.username} style={{color:'black'}} onChangeText={(text)=>this.setState({username:text})} />
                </Item>
                <Item floatingLabel style={{borderBottomColor:'red'}}>
                    <Label>Email</Label>
                    <Input
                    value={this.state.email} style={{color:'black'}} onChangeText={(text)=>this.setState({email:text})} />
                </Item>
                <Item floatingLabel style={{borderBottomColor:'red'}}>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    value={this.state.password} style={{color:'black'}} onChangeText={(text)=>this.setState({password:text})} />
                </Item>
                <Item floatingLabel style={{borderBottomColor:'red'}}>
                    <Label>Comfirm Password</Label>
                    <Input
                    secureTextEntry={true}
                    value={this.state.confirm_password} style={{color:'black'}} onChangeText={(text)=>this.check(text)} />
                </Item>
                <Button full rounded danger onPress={()=>this.usersignup(this.state.email,this.state.password)} style={{margin:10,justifyContent:'center'}} >
                <Text style={{fontSize:25,color:'white'}}>Sign Up</Text>
                </Button>
            </View>
    }
    else{
      signed=<Button full rounded danger onPress={()=>this.siggned()} style={{margin:10,justifyContent:'center'}} >
              <Text style={{fontSize:25,color:'white'}}>Sign Up</Text>
              </Button>
    }
    return(
      <View>
          <View style={styles.container}>
              <View style={styles.innerview1}>
                  <Ionicons style={{marginTop:2.7,color:'#212121',marginLeft:10,}}name="md-arrow-back" size={32} onPress={()=>this.props.navigation.goBack()}/>
                  <Text style={{fontSize:26,marginTop:2.7,color:'#212121',marginLeft:45,textAlign:'center',fontWeight:'bold'}}>Login</Text>
              </View>
          </View>
          <ScrollView>
              <View style={{marginTop:21,alignItems:'center'}}>
                  <Image source={logo} style={{ width:120, height: 120, }} />
                  <Text style={{marginTop:10}}>Please SignUp or Login </Text>
              </View>
              <View style={{marginTop:30}}>
                  {signed}
                  <View style={{margin:20,borderBottomColor:'black',borderBottomWidth:2}}></View>
                  {logged}
                  <View style={{margin:20,borderBottomColor:'black',borderBottomWidth:2}}></View>
              </View>
          </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation:5,
    flexDirection:'row',
    marginTop:Constant.statusBarHeight,
    height:55,
    justifyContent:'space-between',
    marginTop:Constant.statusBarHeight
  },
  innerview1:{
    flexDirection:'row',
    marginTop:8
  }
});
