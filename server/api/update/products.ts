import "firebase/firestore";
import { getFirestore} from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import firebaseAdmin from "firebase-admin";

const credential = firebaseAdmin.credential;

const apps = getApps();

export default async (request: any, response: any) => {
  // const db = getFirestore();

  // // ドキュメントの参照を取得
  // const productRef = doc(db, "products", request.body.productId);

  // // ドキュメントの更新
  // await updateDoc(productRef, {
  //   done: request.body.done,
  // });

  // // 更新後のデータを返す
  // const productsSnap = await db.collection("products").get();
  // const updateData = productsSnap.docs.map((doc) => {
  //   return {
  //     uuid: doc.id,
  //     ...doc.data(),
  //   };
  // });

  // response.json(updateData);
};
