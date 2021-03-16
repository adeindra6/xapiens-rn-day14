import React, { Component, useState } from 'react';
import userData from '../../../user.json';
import AsyncStorage from '@react-native-community/async-storage';

const useAuth = (e = '', p = '') => {
    const [email, setEmail] = useState(e);
    const [password, setPassword] = useState(p);

    let auth = false;
    const user = new User();

    if(userData.email == email && userData.password == password) {
        const Email = () => setEmail(email);
        const Password = () => setPassword(password);
        auth = true;
        return{
            Email,
            Password,
            auth,
        };
    }
    else {
        let userAuth = user.getUserList(email, password);
        if(userAuth) {
            const Email = () => setEmail(email);
            const Password = () => setPassword(password);
            auth = true;
            return{
                Email,
                Password,
                auth,
            }
        }
        else {
            const Email = "";
            const Password = "";
            auth = false;
            return{
                Email,
                Password,
                auth,
            };
        }
    }
};

class User {
    async getUserList(Email, Password) {
        try {
            const userJson = await AsyncStorage.getItem('users');
            console.log(userJson);
            if(userData !== null) {
                const jsonData = JSON.parse(userJson);
                let showJson = jsonData.map(e => {
                    if(e.email == Email && e.password == Password) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            }
        }
        catch(error){
            console.log(error.message);
        }
    };
}
export default useAuth;