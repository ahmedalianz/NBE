import React from 'react';
import {SignupSwitcher} from './SignupSwitcher';

export function Signup4({navigation}) {
  return (
    <SignupSwitcher
      step="signup-success"
      buttonHandler={() => navigation.navigate('Signup4')}
      buttonText="Finish"
      outlined
    />
  );
}
