import { firestore } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  firestore.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetEvents = (authId) =>
  firestore.collection('/events').where("creatorId", "==", authId).get();
// Other Entity APIs ...
