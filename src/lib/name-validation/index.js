import React, { Component, useState } from 'react';

const useNameValidationForm = (n = '') => {
    const [name, setName] = useState(n);

    let reg = /^[A-Za-z\d\s]+$/;
    let verifiedName = false;
    if(name.length > 0) {
        verifiedName = reg.test(String(name).toLowerCase());
    }
    if(verifiedName) {
        const Name = () => setName(name);
        return{
            Name,
            verifiedName,
        };
    }
    else {
        const Name = "";
        return{
            Name,
            verifiedName,
        };
    }
}

export default useNameValidationForm;