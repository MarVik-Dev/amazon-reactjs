import React from 'react'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDkX16eMKKzhQ1odUVPC_iLDal5NihIfFI',
  authDomain: 'amyzon-fr.firebaseapp.com',
  databaseURL: 'https://amyzon-fr.firebaseio.com',
  projectId: 'amyzon-fr',
  storageBucket: 'amyzon-fr.appspot.com',
  messagingSenderId: '226298520007',
  appId: '1:226298520007:web:a0bc7a58d708d7aae579e2'
})

const db =firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
// export default firebase
