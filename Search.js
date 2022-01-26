import React from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator} from 'react-native';
import Constant from 'expo-constants';
import {Ionicons,FontAwesome,MaterialIcons} from '@expo/vector-icons';
import Cards from './Cards';
export default class Search extends React.Component {
  state={
    text:'',
    datanews:[],
    loading:false
  }
  storetext(text){
    this.setState({
      text:text
    });
  }
  fetchnews(){
    this.setState({loading:true})
    fetch(`https://newsapi.org/v2/everything?q=${this.state.text}&language=en&page=1&pageSize=10&apiKey=1328346b24414ac9adf0e81e510de4b4`)
      .then(data=>data.json())
      .then(data=>{
        this.setState({
          datanews:data.articles,
          loading:false
        })
      })
  }
  render(){
    return(
      <View style={{flex:1,marginBottom:100}}>
        <View style={styles.container}>
          <View style={styles.innerview1}>
              <TextInput placeholder="search for news" style={{marginLeft:22,width:'83%',backgroundColor:"#e6e6e6",height:45,borderRadius:20,textAlign:'center'}}
              value={this.state.text} onChangeText={text => this.storetext(text)}/>
          </View>
          <View>
              <FontAwesome style={{marginTop:12,marginRight:50}} name="search" size={30} color="black" onPress={() => this.fetchnews()}/>
          </View>
      </View>
      <View>
      <View>
          {this.state.loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null }
          <FlatList
          data={this.state.datanews}
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
          keyExtractor={item=>item.publishedAt}
          />
      </View>
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
    height:60,
    justifyContent:'space-between',
    marginTop:Constant.statusBarHeight
  },
  innerview1:{
    flexDirection:'row',
    marginTop:8
  },
});
