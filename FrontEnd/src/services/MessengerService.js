import { httpService } from './HttpService';
export const MessengerService = {
	query,
	addMessage,
	getByEmail,
};

function query(filterBy = null) {
	return httpService.get(`api/message?email=${filterBy.email}`);
}
function getByEmail(email) {
	return httpService.get(`api/message/email/${email}`);
}

function addMessage(message) {
	return httpService.post(`api/message`, message);
}
