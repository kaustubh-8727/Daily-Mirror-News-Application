import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,ScrollView,Image} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons,MaterialCommunityIcons,AntDesign,Entypo} from '@expo/vector-icons';
import { Button,Form, Item, Input, Label,useNativeDriver} from 'native-base';
import timesofindia from './assets/toi.png';
import hindustimes from './assets/ht.png';
import economic from './assets/et.png';
import hindu from './assets/th.png';
import jagran from './assets/jagran.jpg';
import aajtak from './assets/aajtak.png';
import abp from './assets/abp.jpg';
import ndtv from './assets/ndtv.png';
import bbc from './assets/bbc.png';
import fox from './assets/fox.png';

export default class Channels extends React.Component {
  state={
    complete:false,
    feedwrite:false,
    message:'',
    name:''
  }
  async handlePress(link){
    this.props.navigation.navigate("NewsDetail");
      // Linking.openURL(this.props.link);
  }
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>
              <Text style={{fontSize:20,marginTop:10,alignSelf:'center',marginLeft:'5%',marginBottom:10}}>All You Need</Text>
      </View>
      <ScrollView>
      <View style={{backgroundColor:'#D0D3D4',alignItems:'center'}}>
      <Text style={{fontSize:20,marginTop:10,alignSelf:'center',marginLeft:'5%',marginBottom:10}}>Newspapers</Text>
      <View style={{flexWrap:'wrap',margin:10,marginBottom:10,borderBottomWidth:2,marginLeft:20}} >
              <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://timesofindia.indiatimes.com/defaultinterstitial.cms'})}>
              <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
                   <Image source={timesofindia} style={{width:80, height: 50,marginTop:6}} />
                   <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>The Times of India</Text>
              </View>
              </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://www.hindustantimes.com/'})}>
              <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
              <Image source={hindustimes} style={{ width:80, height: 50,marginTop:6}} />
              <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>hindustan Times</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://economictimes.indiatimes.com/?from=mdr'})}>
              <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
              <Image source={economic} style={{ width:80, height: 50,marginTop:6 }} />
              <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>Economic Times</Text></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://www.thehindu.com/'})}>
              <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
              <Image source={hindu} style={{ width:110, height: 50,marginTop:6,marginLeft:-15 }} />
              <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>The Hindu</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://www.jagran.com/'})}>
              <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
              <Image source={jagran} style={{ width:80, height: 50,marginTop:6,marginLeft:-15 }} />
              <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>Dainik jagran</Text>
              </View>
            </TouchableOpacity>
        </View>
        <View style={{marginLeft:10,marginTop:10}}>
        <Text style={{marginLeft:"30%",fontSize:20,marginBottom:10}}>News Channels</Text>
        <View style={{flexWrap:'wrap',margin:10,marginBottom:10}} >
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://aajtak.intoday.in/'})}>
                <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
                     <Image source={aajtak} style={{width:80, height: 50,marginTop:6,marginLeft:-15}} />
                     <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>Aaj Tak</Text>
                </View>
                </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://www.abplive.com/'})}>
                <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
                <Image source={abp} style={{ width:50, height: 50,marginTop:6,marginLeft:-15}} />
                <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>ABP News</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://khabar.ndtv.com'})}>
                <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
                <Image source={ndtv} style={{ width:80, height: 50,marginTop:6,marginLeft:-15}} />
                <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>NDTV India</Text></View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://www.bbc.com/'})}>
                <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
                <Image source={bbc} style={{ width:80, height: 50,marginTop:6,marginLeft:-15 }} />
                <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>BBC News</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:'https://www.foxnews.com/'})}>
                <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffffff',width:280,height:60,borderRadius:5,margin:5,marginRight:45,borderWidth:1}}>
                <Image source={fox} style={{ width:80, height: 50,marginTop:6,marginLeft:-15 }} />
                <Text style={{marginTop:20,color:'black',fontSize:15,textAlign:'center'}}>FOX News</Text>
                </View>
              </TouchableOpacity>
          </View>
          </View>
          </View>
        </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:Constant.statusBarHeight,
    borderBottomWidth:2,
    height:55,
    justifyContent:'space-between',
  },
});
