const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const http = require('http').createServer(app);

// Messenger BackEnd: Express App Configuration
app.use(bodyParser.json({ limit: '50mb' }));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'public')));
} else {
	const corsOptions = {
		origin: ['http://127.0.0.1:8080', 'http://localhost:3001', 'http://127.0.0.1:3000', 'http://localhost:3000'],
		credentials: true,
	};
	app.use(cors(corsOptions));
}

const messageRoutes = require('./api/message/message-routes');

// Messenger BackEnd: routes;
app.use('/api/message', messageRoutes);

app.get('/**', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
	console.log(`the server running in port ${port}`);
});
