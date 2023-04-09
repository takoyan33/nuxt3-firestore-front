import { getFirestore } from 'firebase-admin/firestore'

export default async (request: any) => {
  const db = getFirestore()
  const docId = request.body.docId // POSTデータからdocIdを取得
  const docRef = db.collection('todos').doc(docId)
  const docSnap = await docRef.get()
  const productData = docSnap.exists
    ? { uuid: docSnap.id, ...docSnap.data() }
    : null

  return {
    productData
  }
}
