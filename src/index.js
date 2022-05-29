// How to bring express into our api
import express from 'express';
// import { message, messagesList } from './endpoints/messages.js';
import { getMessages } from './firebase/getMessages.js';
import { addMessage } from './firebase/addMessage.js';

const app = express();
app.use(express.json());

// Ex: messages, eachMessage
app.get('/', (req, res) => {
	res.send('Hey! this is working');
});

// app.get('/message', req => {
// 	const { message } = req.body;
// });

app.get('/messages', getMessages);
app.post('/messages', addMessage);
// app.post('/', addMessage);

app.listen(3000, () => {
	console.log(`API listening on http://localhost:3000`);
});
