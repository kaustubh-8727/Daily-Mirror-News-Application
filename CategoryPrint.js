import React from 'react';
import { StyleSheet, Text, View,Image,Share,TouchableOpacity,ScrollView,RefreshControl} from 'react-native';
import * as Linking from 'expo-linking';
import {MaterialIcons,Entypo} from '@expo/vector-icons';
import Constant from 'expo-constants';

class CategoryPrint extends React.Component{
  _handlePress(url){
    Linking.openURL(url);
  };

async onShare(detail){
      try {
        const result = await Share.share({
          message:detail
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
  let userdata=this.props.data;
  if(userdata){
    return(
      <ScrollView>
      <View style={{flex:1,marginBottom:80,borderBottomWidth:5,borderBottomColor:'#997066'}}>
      {userdata.map(ob =>
        <View style={{backgroundColor:'white',borderWidth:6,borderColor:'#997066'}}>
            <Image  source={{uri:ob.urlToImage}}
            style={{width:'100%',height:230}}/>
            <View style={{margin:10,marginLeft:20}}>
                  <Text style={{fontSize:10,width:250,borderBottomWidth:2,borderColor:'red',color:'#808080'}}>{ob.author}</Text>
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:ob.url})}>
                      <Text style={{marginBottom:10,fontSize:16,fontWeight:'bold',width:250,borderBottomWidth:2,borderColor:'#94a8d1'}}>{ob.title}</Text>
                      <Entypo name="share" size={30} color="#868686" style={{marginLeft:"88%",marginTop:-36}} onPress={()=>this.onShare("**"+ob.title+"**"+ob.description+ob.url)}/>
                    </TouchableOpacity>
                  </View>
                  <Text style={{marginTop:10,marginBottom:10,fontSize:14,color:'#808080'}}>{ob.description}</Text>
            </View>
        </View>
      )
    }
    </View>
    </ScrollView>
    );
  }
  else{
    return(
      <Text>Loading</Text>
    );
  }
  }
}
export default CategoryPrint;
