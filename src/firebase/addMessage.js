import { msgCollection } from '../gateway/firestore.js';

export const addMessage = (req, res) => {
	try {
		if (!req.body) {
			res.status(401).send('Invalid request');
			return;
		}
		msgCollection
			.add(req.body)
			.then(doc => {
				res.send('My Message ' + doc.id);
			})
			.catch(err => {
				res.status(500).send(err);
			});
	} catch (wrong) {
		console.log('Something went wrong. Check error message: ', wrong.messsage);
	}
};
