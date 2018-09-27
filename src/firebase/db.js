import { firestore } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  firestore.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  firestore.collection('/users').get();

// Other Entity APIs ...
