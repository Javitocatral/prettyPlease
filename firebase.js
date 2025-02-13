import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCNsX5IsEjQuDqN9hx7Bbdi7Yf22InxXxg',
  authDomain: 'prettyplease-61d1d.firebaseapp.com',
  projectId: 'prettyplease-61d1d',
  storageBucket: 'prettyplease-61d1d.firebasestorage.app',
  messagingSenderId: '950907527554',
  appId: '1:950907527554:web:e4f0c124eb56e56d1c6f9b',
  measurementId: 'G-7FF11BQ68M',
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig)

// Exporta las instancias de Firestore y Auth
export const db = getFirestore(app)
export const auth = getAuth(app)
