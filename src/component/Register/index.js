import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import { useNameValidationForm, useEmailValidationForm, usePasswordValidationForm } from '@libs';

class RegisterComponent extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    nameHandler(text) {
        console.log("Register Component Name Handler : " + text);
        this.setState({name: text});
    }

    validateName(name) {
        if(name !== '' && name !== undefined) {
            return true;
        }
        else {
            return false;
        }
    }

    emailHandler(text) {
        console.log("Register Component Email Handler : " + text);
        this.setState({email: text});
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    passwordHandler(text) {
        console.log("Register Component Password Handler : " + text);
        this.setState({password: text});
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
        const { name, email, password } = this.state;
        if(this.validateName(name) && this.validateEmail(email) && this.validatePassword(password)) {
            action(name, email, password);
            this.setState({name: '', email: '', password: ''});
        }
        else {
            Alert.alert("Warning", 
            "Please fill the form with these rules : \n" +
            "1. Name (required) \n" +
            "2. Email (example@mail.com) \n" +
            "3. Password (min. 6 characters)"
            );
        }
    };

    render() {
        const { name, email, password } = this.state;
        return(
            <View>
                <TextInput
                    value={ name }
                    style={ styles.input }
                    placeholder="Name"
                    onChangeText={(text) => {
                        this.nameHandler(text);
                    }}
                />
                <TextInput
                    value={ email }
                    style={ styles.input }
                    placeholder="Email"
                    onChangeText={(text) => {
                        this.emailHandler(text);
                    }}
                />
                <TextInput
                    value={ password }
                    style={ styles.input }
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.passwordHandler(text);
                    }}
                />
                <TouchableOpacity
                    style={ styles.btn }
                    onPress={() => this.actionSubmit()}>
                    <Text style={ styles.label }>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.link }>
                    <Text style={ styles.linklabel }>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
        );
    }
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

export default RegisterComponent;