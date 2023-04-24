import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBjYiOei6kMOD0x-K6DX1BNYFK5qbDGVs0',
  authDomain: 'vuejs-app-front.firebaseapp.com',
  projectId: 'vuejs-app-front',
  storageBucket: 'vuejs-app-front.appspot.com',
  messagingSenderId: '373841789601',
  appId: '1:373841789601:web:12966ca57a348c7ccda6e0'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
