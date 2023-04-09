import { getFirestore } from 'firebase-admin/firestore'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import firebaseAdmin from 'firebase-admin'
const credential = firebaseAdmin.credential

const apps = getApps()

initializeApp({
  credential: credential.cert(
    './vuejs-app-front-firebase-adminsdk-bn6fk-a5a4028c0f.json'
  )
})

export default async (request: any, response: any) => {
  const db = getFirestore()
  const productsSnap = await db.collection('todos').get()
  const productsData = productsSnap.docs.map((doc) => {
    return {
      uuid: doc.id,
      ...doc.data()
    }
  })

  return productsData
}
