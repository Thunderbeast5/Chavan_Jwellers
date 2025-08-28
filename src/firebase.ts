import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyCMMA97aFLxKvXS4XUOnJrhLiotuEznRAk',
	authDomain: 'chavan-jewellers.firebaseapp.com',
	projectId: 'chavan-jewellers',
	// Correct bucket uses appspot.com, not firebasestorage.app
	storageBucket: 'chavan-jewellers.appspot.com',
	messagingSenderId: '556579472541',
	appId: '1:556579472541:web:d68635404b8f23754e8074',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
// Explicitly target the gs:// bucket to avoid CORS/domain mismatches
export const storage = getStorage(app, 'gs://chavan-jewellers.appspot.com')
