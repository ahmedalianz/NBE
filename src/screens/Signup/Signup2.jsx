import React, {useState} from 'react';
import {SignupSwitcher} from './SignupSwitcher';

export function Signup2({navigation, route}) {
  const [value, setValue] = useState('');

  return (
    <SignupSwitcher
      step="verify-phone"
      buttonHandler={() => navigation.navigate('Signup3')}
      buttonText="Submit"
      phone={route.params.phone}
      value={value}
      setValue={setValue}
    />
  );
}
