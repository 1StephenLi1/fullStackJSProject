// fetch the data from api
import React from 'react';
import ReactDOMSever from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contests`)
.then(res => {
});

const serverRender = () =>
	axios.get(`${config.serverUrl}/api/contests`)
		.then(resp => {
			return {
				initialMarkup: ReactDOMSever.renderToString(
					<App initialContests={resp.data.contests} />
				),
				initialData: resp.data
			}
		});
		
export default serverRender;