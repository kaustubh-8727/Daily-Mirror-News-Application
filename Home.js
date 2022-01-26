import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,ActivityIndicator,FlatList,RefreshControl} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Constant from 'expo-constants';
import {Ionicons,Entypo,MaterialIcons} from '@expo/vector-icons';
import Cards from './Cards';
import logo from './assets/logo.jpg';

export default class Home extends React.Component {

  state={
    newsdata:[],
    loading:false,
    refreshing: true,
    fontLoaded:false
  }

getnews(){
  fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=80&apiKey=1328346b24414ac9adf0e81e510de4b4`)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        newsdata:data.articles,
        loading:false,
        refreshing: false
      })
    })
}

async componentDidMount(){
  this.setState({loading:true})
  this.getnews();
}
onRefresh() {
    //Clear old data of the list
    this.setState({ });
    //Call the Service to get the latest data
    this.getnews();
  }

  render(){
    if (this.state.refreshing) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <View style={{flex:1,marginBottom:100}}>
        <View style={styles.container}>
          <View style={styles.innerview1}>
              <Image source={logo} style={{ width:70, height: 60,marginTop:-1,marginLeft:20 }} />
              <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Text style={{fontSize:26,marginTop:2.7,color:'#212121',marginLeft:25,textAlign:'center',fontWeight:'bold'}}>Daily Mirror</Text>
                  <Text style={{fontSize:12,marginTop:2,color:'#212121',textAlign:'center',marginLeft:10}}>Top Headlines</Text>
              </View>
          </View>
          <View style={styles.innerview2}>
              <MaterialIcons name="settings" size={35} color='#212121' style={{marginLeft:-15,marginTop:10}} onPress={()=> this.props.navigation.navigate("Settings")}/>
          </View>
      </View>
      <View>
          {this.state.loading ?<ActivityIndicator style={{marginTop:30}} size="large" color="red"/>:null }
          <FlatList
          data={this.state.newsdata}
          renderItem={({item})=>{
              return <Cards
               navigation={this.props.navigation}
               heading={item.title}
               description={item.description}
               image={item.urlToImage}
               link={item.url}
               author={item.author}
              />
          }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
          keyExtractor={item=>item.title}
          />
      </View>
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
    height:70,
    justifyContent:'space-between',
    marginTop:Constant.statusBarHeight
  },
  innerview1:{
    flexDirection:'row',
    marginTop:8
  },
  innerview2:{
    flexDirection:'row',
    marginTop:10,
    justifyContent:'space-around',
    width:150

  }
});
