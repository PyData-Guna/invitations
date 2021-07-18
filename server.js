const express = require('express');
const live = require('livereload');
const connect = require('connect-livereload');
const logger = require('morgan');
const serveIndex = require('serve-index');

const liveSrvr = new live.createServer({
	extraExts: (process.env.EXTRA_EXTS || '').split(',')
});

liveSrvr.watch(__dirname);

liveSrvr.server.once('connection', () => {
	setTimeout(() => {
		liveSrvr.refresh('/');
	}, 100);
});

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(connect());
app.use(logger('dev'));

app.use('/invitations', express.static(__dirname), serveIndex(__dirname, { icons: true }));

app.all('/*', (req, res) => res.type('html').send(`
Invalid page.<br>
<a href='/invitations'>Back to home</a>
`));

app.listen(app.get('port'), () => console.log(`Development server listening on port ${app.get('port')}.`))