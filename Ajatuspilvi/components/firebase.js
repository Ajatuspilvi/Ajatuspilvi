import { firebase } from '@react-native-firebase/auth';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey:"AIzaSyDcTPFfMaqIe-5N2O0gzc4LNluMlD_YaFk"
  authDomain:"ajatuspilvi.firebaseapp.com"
  projectId:"ajatuspilvi"
  storageBucket:"ajatuspilvi.appspot.com"
  messagingSenderId:""
  appId:"1:1060750013033:android:e63df757425b203534a8f8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
