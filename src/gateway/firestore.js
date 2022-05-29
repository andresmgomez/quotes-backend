import admin from 'firebase-admin';
import credential from '../private/credentials.js';

admin.initializeApp({
	credential: admin.credential.cert(credential),
});

const db = admin.firestore();
console.log('This works');
export const msgCollection = db.collection('messages');
