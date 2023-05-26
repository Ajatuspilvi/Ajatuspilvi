import auth from '@react-native-firebase/auth';

// Function to sign in with a phone number
export const signInWithPhoneNumber = async (phoneNumber) => {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  return confirmation;
};

// Function to confirm the verification code
export const confirmVerificationCode = async (confirmation, verificationCode) => {
  try {
    await confirmation.confirm(verificationCode);
    return true; // Verification successful
  } catch (error) {
    console.log('Verification failed', error);
    return false; // Verification failed
  }
};
