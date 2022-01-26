import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Share,ScrollView} from 'react-native';
import * as Linking from 'expo-linking';
import {MaterialIcons,Entypo} from '@expo/vector-icons';
import Constant from 'expo-constants';
import NewsDetail from './NewsDetail';

class Cards extends React.Component{
async handlePress(link){
  this.props.navigation.navigate("NewsDetail");
    // Linking.openURL(this.props.link);
}
onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "**"+this.props.heading+"**"+this.props.description+this.props.link,
        title:
          this.props.heading,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render(){
    return(
        <View style={{flex:1,backgroundColor:'white',borderWidth:6,borderColor:'#711906'}}>
            <Image  source={{uri:this.props.image}}
            style={{width:'100%',height:230}}/>
            <View style={{flexDirection:'row',margin:10}}>
              <View style={{marginLeft:20}}>
                  <Text style={{fontSize:10,width:250,borderBottomWidth:2,borderColor:'red',color:'#808080'}} elipsizemode="tail">{this.props.author}</Text>
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:this.props.link})}>
                      <Text style={{fontSize:16,fontWeight:'bold',width:250,borderBottomWidth:2,borderColor:'#94a8d1',}} elipsizemode="tail">{this.props.heading}</Text>
                    </TouchableOpacity>
                    <Entypo name="share" size={30} color="#868686" style={{marginLeft:20,marginTop:20}} onPress={this.onShare}/>
                  </View>
                  <Text style={{marginTop:10,marginBottom:10,fontSize:14,color:'#808080'}}>{this.props.description}</Text>
              </View>
            </View>
        </View>
    );
  }
}
export default Cards;
