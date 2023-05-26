import React, { useState } from 'react';
import { View, Button, TextInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';


export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handlePhoneNumberSubmit = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      // Store the confirmation object for later use
      // You'll need it to confirm the verification code
      // e.g., setConfirmation(confirmation);
      // Show UI for entering the verification code
    } catch (error) {
      console.log('Failed to send verification code', error);
      Alert.alert('Error', 'Failed to send verification code');
    }
  };

  const handleVerificationCodeSubmit = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(confirmation.verificationId, verificationCode);
      await auth().signInWithCredential(credential);
      // Authentication successful, proceed to the next screen
    } catch (error) {
      console.log('Failed to verify verification code', error);
      Alert.alert('Error', 'Failed to verify verification code');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send Verification Code" onPress={handlePhoneNumberSubmit} />

      <TextInput
        placeholder="Verification Code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <Button title="Verify Code" onPress={handleVerificationCodeSubmit} />
    </View>
  );
}
