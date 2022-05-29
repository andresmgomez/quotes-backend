export const message = (req, res) => {
	const { author, title } = req.body;
	// const message = {
	// 	author: 'Rumi',
	// 	title:
	// 		'Raise your words, not voice. It is rain that grows flowers, not thunder.',
	// 	date: new Date(),
	// };
	res.send(`My Message: ${(author, title)}`);
};

export const messagesList = (req, res) => {
	// Make an array of Messages
	let messagesList = [];
	const { message } = req.body;
	const newMessages = [...messagesList, message];
	res.send(newMessages);
};
