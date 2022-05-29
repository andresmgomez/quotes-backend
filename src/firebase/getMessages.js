import { msgCollection } from '../gateway/firestore.js';

export const getMessages = (req, res) => {
	try {
		msgCollection
			.get()
			.then(snapshot => {
				const messageList = snapshot.docs.map(doc => {
					let message = doc.data();
					message.id = doc.id;
					return message;
				});
				res.send(messageList);
			})
			.catch(err => {
				res.status(500).send(err);
			});
	} catch (wrong) {
		console.log(`Something went wrong. Check error message: `, wrong.message);
	}
};

export function getMessages1(data) {}
