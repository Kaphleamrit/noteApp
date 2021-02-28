import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View ,Text, TouchableOpacity, ScrollView} from 'react-native';
import Title from './assets/title.svg';
import Del from './assets/delete.svg';
import Submit from './assets/upload.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     inpText : '',
     list : ["Type below to add","Click delete icon to remove"]
  }
this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
this.delete = this.delete.bind(this);
}

  handleChange = text => {
      this.setState({
      inpText: text
    });
  }

  handleClick() {
    // console.log(this.state.inpText);
    this.setState(prevState => {
      return {
        inpText : '',
        list : [...prevState.list,prevState.inpText]
      }
    })
}

  delete(id) {
    this.setState(prevState => ({
      inpText : prevState.inpText,
      list : prevState.list.filter(e1 => e1 != prevState.list[id])
    }));
  }


  render() {

          return (
    <View style={styles.container}>

      <View style = {styles.toolbar}>
            <Title height = {70} width = {60} style = {{marginLeft : 35,marginTop : 35}}/>
        <Text style = {{fontSize :20,position : 'relative', top : 60, left : 40, fontWeight: 'bold'}}>List your today's works</Text>
       <TouchableOpacity>
       </TouchableOpacity>
      </View>

      <ScrollView>

   { this.state.list.map((item, key)=> {
     return (
       <View style = {{flexDirection: 'row' , margin : 20, position : 'relative', left : -26}} key={key}>

    <TouchableOpacity onPress ={this.delete.bind(this,key)}>
      
      <Del height = {30} width = {30} />
    </TouchableOpacity>
    <Text style = {styles.list} > {String(item)} </Text>
    </View>
     );
   }
   )}

        </ScrollView>

      
    <View style = {{flexDirection : 'row', paddingBottom : 10}} >
 <TextInput  style={styles.input}  value={this.state.inpText}
      onChangeText = {this.handleChange}/> 

    <TouchableOpacity style = {styles.button} onPress = {this.handleClick}>
     <Submit height = {45} width = {60} />
      </TouchableOpacity>  

    </View>
   
     

     <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#000',
  },
  button : {
    width : 60  ,
    backgroundColor : "#444",
    height : 40
  },
  input : {
    height: 40, borderColor: 'gray', borderWidth: 1, width : 250,
    backgroundColor : 'wheat',
    marginRight :10,
    fontSize : 20,
   
  },
toolbar : {
  backgroundColor : "green",
  height : 100,
  width : 400,
  flexDirection : 'row'

},
list : {
  // position : 'relative',
  fontSize : 20,
   fontFamily : 'monospace',
  paddingRight : 30 ,
  color : 'wheat'

  
}
});
