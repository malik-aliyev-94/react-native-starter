import React from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { Button, Text, View } from 'native-base';

const BackBtn = (props) => (
  <View>
    <Text style={{padding: 20, fontSize: 24, color: '#AAA', textAlign: 'center'}}>tabBarNavigation is hidden in this screen.</Text>
    <Button
      style={{alignSelf:'center'}}
      onPress={() => props.navigation.navigate("Home")} >
      <Text>Back Home</Text>
    </Button>
  </View>
);

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.github.com/users/malik-aliyev-94')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator/>
          <BackBtn  navigation={this.props.navigation} />
        </View>
      )
    }

    return (
      <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{borderRadius: 50, overflow: 'hidden'}}>
          <Image
            style={{width: 100, height: 100}}
            source={{ uri: this.state.data.avatar_url }} />
        </View>
        <Text style={{padding: 20, fontSize: 24, color: '#AAA', textAlign: 'center'}}>{this.state.data.login}</Text>
        <BackBtn navigation={this.props.navigation} />
      </View>
    );
  }
}
