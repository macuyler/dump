const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

// Get the origin of a request.
const origin = ({ protocol, rawHeaders }) => {
	const hostIndex = rawHeaders.indexOf('Host');
	const host = hostIndex === -1 ? `localhost:${PORT}` : rawHeaders[hostIndex + 1];
	return `${protocol}://${host}`;
};

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

if (!process.env.NO_CORS) {
	app.use(cors(corsOptions));
}

app.use(bodyParser.json());

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.get('/hello', (req, res) => {
	res.json(JSON.stringify({'message': 'hello world'}));
});

app.post('/dump', (req, res) => {
	console.log(req.body);
	res.json(JSON.stringify({'status': 200}));
});

app.get('/dump/*', (req, res) => {
	console.log('Dump:', req.url.replace('/dump/', ''));
	res.send('Dumped!');
});

app.get('/redir', (req, res) => {
	res.redirect(302, `${origin(req)}/flag.txt`);
});

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.listen(PORT, () => console.log(` ~ Listening at http://localhost:${PORT}`));
