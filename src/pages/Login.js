import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  keyboard
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

import ValidationComponent from 'react-native-form-validator';

export default class Login extends ValidationComponent<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#F9F9F9',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#455a64',
  	fontSize:16
  },
  signupButton: {
   
  	color:'#455a64',
  	fontSize:16,
  	fontWeight:'500'
  }
});
