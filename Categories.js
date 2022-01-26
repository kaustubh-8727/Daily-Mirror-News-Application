import React from 'react';
import { StyleSheet, Text, View,ScrollView,AsyncStorage,ImageBackground,TextInput,TouchableOpacity,Image} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons} from '@expo/vector-icons';
import business from './assets/b2.jpg';
import sports from './assets/s2.jpg';
import tech from './assets/t1.jpg';
import enter from './assets/e3.jpg';
import science from './assets/sc2.jpg';
import general from './assets/tr2.jpg';
import health from './assets/health2.png';
import mycurve from './assets/mycurve.png';
import politics from './assets/p3.jpg';
import fashion from './assets/f2.jpg';
import travel from './assets/tr1.jpg';
import corona from './assets/corona2.jpg';


export default class Categories extends React.Component {

  state={
    name:'Business',
    newscate:[]
  }
async fetchdata(text){
      this.props.navigation.navigate("Businesscate",{name:text});
}
async fetchcategory(text){
      this.props.navigation.navigate("Othercategory",{name:text});
}
  render(){
    return(
      <View style={{flex:1}}>
          <View style={styles.container}>
            <View style={styles.innerview1}>
                <Text style={{fontSize:30,marginTop:3,alignSelf:'center',marginLeft:'25%',fontWeight:'bold'}}>Find Your Type</Text>
            </View>
        </View>
        <ScrollView>
        <View style={{alignItems:'center'}}>
        <View style={{backgroundColor:'#D0D3D4',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginLeft:-10}}>
              <TouchableOpacity onPress={() => this.fetchcategory("coronavirus")}>
                <View style={{width:110,height:120,marginTop:10,marginRight:45,marginBottom:30,marginLeft:20,borderWidth:1}}>
                <Image source={corona} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Corona Virus</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.fetchdata("Technology")}>
                <View style={{width:110,height:120,marginLeft:-40,borderWidth:1,marginTop:10}}>
                <Image source={tech} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,marginRight:8,textAlign:'center'}}>Technology</Text></View>
              </TouchableOpacity>

                <TouchableOpacity onPress={() => this.fetchdata("Business")}>
                   <View style={{width:110,height:120,marginLeft:5,alignItems:'center',borderWidth:1,marginTop:10}}>
                   <Image source={business} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                   <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Business</Text>
                   </View>
                </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginLeft:-10,marginBottom:30}}>
              <TouchableOpacity onPress={() => this.fetchdata("Entertainment")}>
                <View style={{width:110,height:120,marginLeft:20,alignItems:'center',borderWidth:1,marginTop:10}}>
                <Image source={enter} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Entertainment</Text></View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.fetchdata("Science")}>
                <View style={{width:110,height:120,marginLeft:7,borderWidth:1,marginTop:10}}>
                <Image source={science} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,marginRight:8,textAlign:'center'}}>Science</Text></View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.fetchdata("general")}>
                <View style={{width:110,height:120,borderWidth:1,marginTop:10,marginLeft:5}}>
                <Image source={general} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,textAlign:'center'}}>General</Text></View>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginLeft:-10,marginBottom:30}}>
              <TouchableOpacity onPress={() => this.fetchcategory("politics")}>
                <View style={{width:110,height:120,marginLeft:20,alignItems:'center',borderWidth:1,marginTop:10}}>
                <Image source={politics} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Politics</Text></View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.fetchcategory("fashion")}>
                <View style={{width:110,height:120,marginLeft:7,borderWidth:1,marginTop:10}}>
                <Image source={fashion} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,marginRight:8,textAlign:'center'}}>Fashion</Text></View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.fetchcategory("travel")}>
                <View style={{width:110,height:120,borderWidth:1,marginTop:10,marginLeft:5}}>
                <Image source={travel} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
                <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Travel</Text></View>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',marginLeft:-10}}>
          <TouchableOpacity onPress={() => this.fetchcategory("health")}>
            <View style={{width:110,height:120,marginLeft:20,borderWidth:1,marginTop:10}}>
            <Image source={health} style={{ width:80, height: 80,marginTop:10,marginLeft:10 }} />
            <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Health</Text></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.fetchdata("Sports")}>
            <View style={{width:110,height:120,marginLeft:10,borderWidth:1,marginTop:10}}>
            <Image source={sports} style={{ width:80, height: 80,marginTop:10,marginLeft:14 }} />
            <Text style={{color:'black',fontSize:12,textAlign:'center'}}>Sports</Text></View>
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
    backgroundColor: '#2193b0',
    elevation:5,
    flexDirection:'row',
    marginTop:Constant.statusBarHeight,
    height:60,
    justifyContent:'space-between',
    marginTop:Constant.statusBarHeight
  },
  innerview1:{
    flexDirection:'row',
    flex:1,
    marginTop:8
  },
});
