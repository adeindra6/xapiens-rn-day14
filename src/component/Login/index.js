import React, { Component, useState, useEffect } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import { useNameValidationForm, useEmailValidationForm, usePasswordValidationForm, useAuth } from '@libs';

class LoginComponent extends Component {
    state = {
        email: '',
        password: '',
    };

    emailHandler(text) {
        console.log("Login Component Email Handler : " + text);
        this.setState({email: text});        
    }

    passwordHandler(text) {
        console.log("Login Component Password Handler : " + text);
        this.setState({password: text});
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        if(password.length > 6) {
            return true;
        }
        else {
            return false;
        }
    }

    actionSubmit = () => {
        const { action } = this.props;
        const { email, password } = this.state;
        if(this.validateEmail(email) && this.validatePassword(password)) {
            action(email, password);
            this.setState({email: '', password: ''});
        }
        else {
            Alert.alert("Warning", "E-mail not valid!");
        }
    };

    render() {
        const { email, password } = this.state;
        return(
            <View>
                <TextInput
                    value={ email }
                    placeholder="Email"
                    style={ styles.input }
                    onChangeText={(text) => {
                        this.emailHandler(text);
                    }}
                />
                <TextInput
                    value={ password }
                    placeholder="Password"
                    secureTextEntry={true}
                    style={ styles.input }
                    onChangeText={(text) => {
                        this.passwordHandler(text);
                    }}
                />
                <TouchableOpacity
                    style={ styles.btn }
                    onPress={() => this.actionSubmit()}>
                    <Text style={ styles.label }>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.link }>
                    <Text style={ styles.linklabel }>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const Login2 = () => {
    const [ email, setEmail ] = useState();
    let { Email, verifEmail } = useEmailValidationForm();
    function emailHandler(text) {        
        console.log("Login Component Email Handler : " + text);
        let verifiedEmail = verifEmail(text);
        console.log(verifiedEmail);
        setEmail(text);
    }

    return(
        <TextInput
                    value={ email }
                    placeholder="Email"
                    style={ styles.input }
                    onChangeText={(text) => {
                        emailHandler(text);
                    }}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        backgroundColor: '#e8e8e8',
        alignSelf: 'center',
    },

    btn: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginTop: '30%',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    link: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'white',
    },

    linklabel: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#5db075',
    },
});

export default LoginComponent;