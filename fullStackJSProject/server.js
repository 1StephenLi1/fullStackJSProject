import apiRouter from './api';
import config from './config';

import express from 'express';
import fs from 'fs';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

import serverRender from './serverRender';


const server = express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

server.get('/', (req, res) => {
	serverRender()
		.then(( {initialMarkup, initialData} ) => {
			res.render('index', {
				initialMarkup,
				initialData
			});
		})
		.catch(console.error);
});

server.set('view engine', 'ejs'); // set EJS
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
	console.info('Express listening on port', config.port)
});