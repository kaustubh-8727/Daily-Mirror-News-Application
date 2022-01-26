import React from 'react';
import { StyleSheet, Text, View,Image,Share,ActivityIndicator,RefreshControl,ScrollView,TouchableOpacity} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons,FlatList,Entypo} from '@expo/vector-icons';
import CategoryPrint from './CategoryPrint';

export default class Businesscate extends React.Component {
  state={
    name:'',
    newsdata:[],
    check:false,
    loading:false,
    refreshing: true
  }
async categorynews(){
  this.setState({loading:true})
  const {name}=this.props.route.params;
  await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${name}&language=en&page=1&pageSize=40&apiKey=1328346b24414ac9adf0e81e510de4b4`)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        newsdata:data.articles,
        check:true,
        loading:false,
        refreshing: false
      });
    })
}
onRefresh() {
    this.categorynews();
  }
  componentDidMount(){
    this.categorynews();
  }
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
    let show;
    if(this.state.check){
      show=<ScrollView refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh.bind(this)}
                        />
                      }>
                <View style={{flex:1,marginBottom:80,borderBottomWidth:5,borderBottomColor:'#997066'}}>
                {this.state.newsdata.map(ob =>
                  <View style={{backgroundColor:'white',borderWidth:6,borderColor:'#997066'}}>
                      <Image  source={{uri:ob.urlToImage}}
                      style={{width:'100%',height:230}}/>
                      <View style={{margin:10,marginLeft:20}}>
                            <Text style={{fontSize:10,width:250,marginLeft:10,borderBottomWidth:2,borderColor:'red',color:'#808080'}}>{ob.author}</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                              <TouchableOpacity onPress={()=> this.props.navigation.navigate("NewsDetail",{link:ob.url})}>
                                <Text style={{marginBottom:10,fontSize:16,fontWeight:'bold',width:250,borderBottomWidth:2,borderColor:'#94a8d1'}}>{ob.title}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.onShare("**"+ob.title+"**"+ob.description+ob.url)}>
                              <Entypo name="share" size={30} color="#868686" style={{marginTop:20}}/>
                              </TouchableOpacity>
                            </View>
                            <Text style={{marginTop:10,marginBottom:10,fontSize:14,color:'#808080'}}>{ob.description}</Text>
                      </View>
                  </View>
                )
              }
              </View>
          </ScrollView>
    }
    const {name}=this.props.route.params;
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.innerview1}>
              <Ionicons style={{marginTop:2.7,color:'#212121',marginLeft:20,}}name="md-arrow-back" size={32} onPress={()=>this.props.navigation.goBack()}/>
              <Text style={{fontSize:23,marginTop:2.7,color:'#212121',marginLeft:70,textAlign:'center',fontWeight:'bold'}}>{name}</Text>
          </View>
      </View>
      <View>
        {this.state.loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null }
        {show}
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
