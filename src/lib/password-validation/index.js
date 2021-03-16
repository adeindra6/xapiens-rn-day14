import React, { Component, useState } from 'react';

const usePasswordValidationForm = (p = '') => {
    const [password, setPassword] = useState(p);

    let verifiedPassword = false;
    if(password.length > 6) {
        verifiedPassword = true;
    }
    if(verifiedPassword) {
        const Password = () => setPassword(password);
        return{
            Password,
            verifiedPassword,
        };
    }
    else {
        const Password = "";
        return{
            Password,
            verifiedPassword,
        };
    }
}

export default usePasswordValidationForm;