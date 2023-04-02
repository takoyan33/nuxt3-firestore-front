import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { credential } from "firebase-admin";

const apps = getApps();

export default async (request: any, response: any) => {
  const route = useRoute();
  const db = getFirestore();
  const docId = response.params;
  const docRef = db.collection("products").doc(docId);
  const docSnap = await docRef.get();
  const productData = docSnap.exists
    ? { uuid: docSnap.id, ...docSnap.data() }
    : null;

  return {
    productData: productData,
  };
};
