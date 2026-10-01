import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

const noticesCollection = collection(db, "notices");


/*
|--------------------------------------------------------------------------
| Get all notices
|--------------------------------------------------------------------------
*/

export const getNotices = async () => {
  const noticesQuery = query(
    noticesCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(noticesQuery);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};


/*
|--------------------------------------------------------------------------
| Add notice
|--------------------------------------------------------------------------
*/

export const addNotice = async (noticeData) => {
  const docRef = await addDoc(noticesCollection, {
    title: noticeData.title,
    description: noticeData.description,
    date: noticeData.date,
    important: noticeData.important,
    published: noticeData.published,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
};


/*
|--------------------------------------------------------------------------
| Update notice
|--------------------------------------------------------------------------
*/

export const updateNotice = async (noticeId, noticeData) => {
  const noticeRef = doc(db, "notices", noticeId);

  await updateDoc(noticeRef, {
    title: noticeData.title,
    description: noticeData.description,
    date: noticeData.date,
    important: noticeData.important,
    published: noticeData.published,
    updatedAt: serverTimestamp(),
  });
};


/*
|--------------------------------------------------------------------------
| Delete notice
|--------------------------------------------------------------------------
*/

export const deleteNotice = async (noticeId) => {
  const noticeRef = doc(db, "notices", noticeId);

  await deleteDoc(noticeRef);
};