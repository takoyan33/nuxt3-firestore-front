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
const db = getFirestore();
const productsSnap = await db
  .collection("products")
  .orderBy("date", "desc")
  .get();
const productsData = productsSnap.docs.map((doc) => {
  return {
    uuid: doc.id,
    ...doc.data(),
  };
});

  const docId = "L76ow6M3AoZmK2qYj90W";
  const docRef = db.collection("products").doc(docId);
  const docSnap = await docRef.get();
  const productData = docSnap.exists
    ? { uuid: docSnap.id, ...docSnap.data() }
    : null;

  

  // if (request.method === "POST") {
  //   const newTodo = {
  //     name: request.body.name,
  //     content: request.body.content,
  //   };

  //   const todosCollection = db.collection("products").get();
  //   const newDocRef = await todosCollection.doc();
  //   await newDocRef.set(newTodo);

  //   productsData.push({
  //     uuid: newDocRef.id,
  //     ...newTodo,
  //   });
  // }

  return productsData;
};
