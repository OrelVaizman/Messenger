const messageService = require('./message-service');

async function getMessages(req, res) {
	const messages = await messageService.query(req.query.email);
	res.send(messages);
}
async function getByEmail(req, res) {
	const messages = await messageService.getByEmail(req.params.email);
	res.send(messages);
}

async function addMessage(req, res) {
	const message = req.body;
	await messageService.add(message);
	res.send(message);
}

module.exports = {
	addMessage,
	getMessages,
	getByEmail,
};
