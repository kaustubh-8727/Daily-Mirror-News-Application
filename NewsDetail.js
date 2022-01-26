import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default class NewsDetail extends React.Component {
  render(){
    const {link}=this.props.route.params;
    return(
      <View>
        <View style={styles.container}>
          <View style={styles.innerview1}>
              <Ionicons style={{marginTop:2.7,color:'#212121',marginLeft:10,}}name="md-arrow-back" size={32} onPress={()=>this.props.navigation.goBack()}/>
              <Text style={{fontSize:26,marginTop:2.7,color:'#212121',marginLeft:45,textAlign:'center',fontWeight:'bold'}}>NewsDetail</Text>
          </View>
      </View>
      <View style={{width:'100%',height:'100%'}}>
          <WebView
          source={{uri:link}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          />
      </View>
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
