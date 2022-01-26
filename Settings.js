import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,ScrollView} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons,MaterialCommunityIcons,AntDesign,Entypo} from '@expo/vector-icons';
import { Button,Form, Item, Input, Label,useNativeDriver} from 'native-base';
import * as firebase from 'firebase';
import {firebaseConfig} from './Config';

if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
}

export default class Settings extends React.Component {
  state={
    complete:false,
    feedwrite:false,
    message:'',
    name:''
  }
  componentDidMount(){
    this.unsuscribeAuth=firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          complete:true,
          name:user.email
        });
      }
    })
  }
  componentWillUnmount(){
    this.unsuscribeAuth()
  }
  logout(){
    firebase.auth().signOut()
    Alert.alert("You are sucessfully logged out");
    this.setState({complete:false});
  }
  logout1(){
    this.setState({name:''});
    Alert.alert("Please Login or Signup");
  }
  feed(){
    if(this.state.complete){
      this.setState({feedwrite:!(this.state.feedwrite)});
    }
    else{
      Alert.alert("Please Login or Signup to add your feedback");
    }
  }
  store(text){
    this.setState({message:text});
    const newitem=firebase.database().ref('feedback');
    newitem.push().set({
    message:text,
    name:this.state.name,
    at:Date.now()
  })
  this.setState({message:''});
  }

  render(){
    let loggedout;
    let feedy;
    if(this.state.complete){
      loggedout=<View>
                    <View style={{backgroundColor:'lightblue',width:"100%",height:50}}>
                        <Text style={{textAlign:'center',marginTop:30,fontWeight:'bold'}}>{this.state.name}</Text>
                    </View>
                    <View style={{marginBottom:40,backgroundColor:'lightblue',width:"100%",height:100,borderBottomWidth:2}}>
                        <TouchableOpacity onPress={()=> this.logout()}>
                        <AntDesign name="logout" size={40} color="black" style={{marginTop:10,marginLeft:"45%"}}/>
                        <Text style={{marginLeft:"45%",marginTop:10}}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    }
    else{
      loggedout=<View style={{flexDirection:'row',marginBottom:40,backgroundColor:'lightblue',width:"100%",height:120,borderBottomWidth:2}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
                      <MaterialIcons name="account-circle" size={40} color="black" style={{marginTop:30,marginLeft:"60%"}}/><Text style={{marginBottom:20,marginLeft:50,marginLeft:"50%"}}>Login/SignUp</Text>
                    </TouchableOpacity>
                </View>
    }
    if(this.state.feedwrite){
      feedy=<View>
              <Item regular floatingLabel style={{borderColor:'black',margin:10,border:40,marginLeft:10,height:100}}>
              <Label>Write your message</Label>
              <Input
              secureTextEntry={false}
              value={this.state.message} style={{color:'black'}} onChangeText={(text)=>this.setState({message:text})} />
              </Item>
              <Button full rounded danger onPress={()=>this.store(this.state.message)} style={{margin:10,justifyContent:'center',marginLeft:100,width:160}}>
              <Text style={{fontSize:25,color:'white'}}>Submit</Text>
              </Button>
          </View>
    }
    return(
      <ScrollView>
      <View>
        <View style={styles.container}>
          <View style={styles.innerview1}>
              <Ionicons style={{marginTop:2.7,color:'#212121',marginLeft:10,}}name="md-arrow-back" size={32} onPress={()=>this.props.navigation.goBack()}/>
              <Text style={{fontSize:26,marginTop:2.7,color:'#212121',marginLeft:45,textAlign:'center',fontWeight:'bold'}}>Settings</Text>
          </View>
      </View>
      <View style={{}}>
        <View>
            {loggedout}
        </View>
        <View style={{marginTop:30,flexDirection:'column',backgroundColor:'lightyellow',width:"100%",height:120,alignItems:'center',borderBottomWidth:2}}>
          <TouchableOpacity onPress={()=>this.feed()}>
          <MaterialIcons name="feedback" size={40} color="black" style={{marginTop:30,marginLeft:15}}/><Text>Feedback</Text>
          </TouchableOpacity>
        </View>
        {feedy}
        <View style={{marginTop:30,flexDirection:'column',backgroundColor:'lightpink',width:"100%",height:120,alignItems:'center',borderBottomWidth:2}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("TermsandConditions")}>
          <Text style={{marginTop:45}}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
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
