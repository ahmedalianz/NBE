import React, {useState, useEffect} from 'react';
import {SignupSwitcher} from './SignupSwitcher';

export function Signup3({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lowerCaseValidation, setLowerCaseValidation] = useState(true);
  const [upperCaseValidation, setUpperCaseValidation] = useState(true);
  const [minValidation, setMinValidation] = useState(true);
  const [numberValidation, setNumberValidation] = useState(true);
  const [specialValidation, setSpecialValidation] = useState(true);
  const [passwrodMisMatch, setPasswordMisMatch] = useState(true);
  useEffect(() => {
    if (/\d/.test(password)) {
      setNumberValidation(false);
    } else {
      setNumberValidation(true);
    }
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(password)) {
      setSpecialValidation(false);
    } else {
      setSpecialValidation(true);
    }
    if (/[A-Z]/.test(password)) {
      setUpperCaseValidation(false);
    } else {
      setUpperCaseValidation(true);
    }
    if (/[a-z]/.test(password)) {
      setLowerCaseValidation(false);
    } else {
      setLowerCaseValidation(true);
    }
    if (password.length >= 8) {
      setMinValidation(false);
    } else {
      setMinValidation(true);
    }
    if (password !== '' && password === confirmPassword) {
      setPasswordMisMatch(false);
    } else {
      setPasswordMisMatch(true);
    }
  }, [password, confirmPassword]);
  return (
    <SignupSwitcher
      step="set-password"
      buttonHandler={() => navigation.navigate('Signup4')}
      buttonText="Submit"
      passwordAccepted={
        !lowerCaseValidation &&
        !minValidation &&
        !upperCaseValidation &&
        !numberValidation &&
        !specialValidation &&
        !passwrodMisMatch
      }
      {...{
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        lowerCaseValidation,
        numberValidation,
        upperCaseValidation,
        specialValidation,
        minValidation,
        passwrodMisMatch,
      }}
    />
  );
}
