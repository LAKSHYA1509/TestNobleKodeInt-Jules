'use client'; // if you're using app router and this is a client component

import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function ( ) {
  const [phone, setPhone] = useState('');

  return (
    <>
<PhoneInput
  defaultCountry="in"
  value={phone}
  onChange={(phone) => setPhone(phone)}
  inputClassName="border rounded-tr-md rounded-br-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium"
  inputStyle={{
    paddingTop: '21px',
    paddingBottom: '21px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderTopRightRadius: '0.375rem',
    borderBottomRightRadius: '0.375rem',
    borderTopLeftRadius: '0rem',
    borderBottomLeftRadius: '0rem',
    fontSize: '16px',
    fontWeight: '400',
  }}
  inputProps={{
    id: 'phone',
    name: 'phone',
    placeholder: '1234567890',
    required: true
  }}
/>


</>


      
   
  );
}
