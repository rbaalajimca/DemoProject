import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,Keyboard 
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import {Actions} from 'react-native-router-flux';


export default class Logo extends ValidationComponent <{}> {
constructor(props){
  super(props)
 this.state = {
    username: null,
    password: null
  }

}
  
  onPressLoginButton=() =>{
  
    const { username, password } = this.state;

    this.validate({
      username: {minlength:3, maxlength:7, required: true,email: true},
      password:{required: true}
     
    });
    Keyboard.dismiss();
    Actions.TabNavigator()
   
  }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
            
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#FFFFFF"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={username => this.setState({ username })}
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={password => this.setState({ password })}
              placeholderTextColor = "#FFFFFF"
              ref={(input) => this.password = input}
              />
           <TouchableOpacity  onPress={this.onPressLoginButton} style={styles.button}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>    

            <Text style={styles.buttonText}>
            {this.getErrorMessages()}
          </Text> 
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#757575',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#FFFFFF',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#D3F703',
      borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#333F48',
    textAlign:'center'
  }
  
});