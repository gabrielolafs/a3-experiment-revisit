import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import fs from 'fs'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const snapshot = await getDocs(collection(db, 'your-collection'))
const data = snapshot.docs.map(doc => doc.data())

fs.writeFileSync('data.json', JSON.stringify(data, null, 2))
console.log('exported', data.length, 'records')