// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0LnZMY6VayeV8mwQKwNz9HGTiL7JjuNs',
  authDomain: 'vlg-software.firebaseapp.com',
  projectId: 'vlg-software',
  storageBucket: 'vlg-software.appspot.com',
  messagingSenderId: '345331279680',
  appId: '1:345331279680:web:f2fd49bbe2bcda38a53ca5',
  measurementId: 'G-VTYG8N2HR5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
