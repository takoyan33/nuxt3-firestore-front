import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { credential } from "firebase-admin";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert(
      "./vuejs-app-front-firebase-adminsdk-bn6fk-a5a4028c0f.json"
    ),
  });
}

export default async (request: any, response: any) => {
  const { docId } = request.params; // パスパラメータからdocIdを取得
  const db = getFirestore();
  const docRef = db.collection("products").doc(docId);
  const docSnap = await docRef.get();
  const productData = docSnap.exists
    ? { uuid: docSnap.id, ...docSnap.data() }
    : null;

  return {
    productData: productData,
  };
};
