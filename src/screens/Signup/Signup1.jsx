import React, {useState} from 'react';
import {SignupSwitcher} from './SignupSwitcher';

export function Signup1({navigation}) {
  const [phone, setPhone] = useState('');

  return (
    <SignupSwitcher
      withText
      step="enter-phone"
      buttonHandler={() => navigation.navigate('Signup2', {phone})}
      buttonText="Next"
      phone={phone}
      setPhone={setPhone}
    />
  );
}
