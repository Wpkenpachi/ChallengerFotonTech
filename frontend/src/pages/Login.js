import React, { Component } from 'react';

import { View, TextInput, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

// import styles from './styles';

export default class Login extends Component {

    state = {
        username: '',
        pass: ''
    }


    setUsername = ( username ) => {
        this.setState({username})
    }

    setPass = ( pass ) => {
        this.setState({pass})
    }

    submit = () => {
        console.log( this.username, this.pass )
    }


    render() {
        return (
            <View>
                <FormLabel> Username </FormLabel>
                <FormInput value={this.setUsername}/>

                <FormLabel> Password </FormLabel>
                <FormInput>
                    <TextInput 
                        secureTextEntry="true"
                        value={this.setPass}
                    />
                </FormInput>

                <FormInput>
                    <Button 
                        title="Logar"
                        onPress={this.submit}
                        buttonStyle={{height: 50, width: 250, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
                        containerStyle={{marginVertical: 10}}
                        titleStyle={{fontWeight: 'bold', color: 'white'}}
                    />
                </FormInput>
                
            </View>
        );
    }
}
