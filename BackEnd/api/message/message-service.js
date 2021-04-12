const dbService = require('../../services/db.service');

module.exports = {
	query,
	add,
	getByEmail,
};

async function query(filterBy = null) {
	const collection = await dbService.getCollection('message');
	try {
		const messages = await collection.find({ email: { $regex: filterBy } }).toArray();
		return messages;
	} catch (err) {
		console.log('Messenger SERVICE: Cannot load messages.');
		throw err;
	}
}

async function getByEmail(email) {
	const collection = await dbService.getCollection('message');
	try {
		const messages = await collection.find({ email }).toArray();
		return messages;
	} catch (err) {
		console.log('Messenger SERVICE: Cannot load messages by Email.');
		throw err;
	}
}

async function add(message) {
	const collection = await dbService.getCollection('message');
	try {
		await collection.insertOne(message);
		return message;
	} catch (err) {
		console.log(`Messenger SERVICE - ERROR: Cannot add message.`);
		throw err;
	}
}
