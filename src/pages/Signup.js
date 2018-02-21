import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  keyboard
} from 'react-native';


import Form from '../components/Form';
import SignupForm from '../components/signupform';


import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
			<Text style={styles.logoText}>Register</Text>	
      <SignupForm type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#f5f5f5',
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
  },
  logoText : {
  	marginVertical: 15,
    fontSize:25,
    alignItems:'center',
    color:'#000000',
    justifyContent:'flex-end',
  }
});
