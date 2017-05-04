import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { BrowserHistory as Router,Route } from 'react-router';
import Home from './components/Home';
import Source from './components/Source';


render (
		<HashRouter>
			<div>
				<Route exact path="/" component={Home} />
	        	<Route exact path="/source" component={Source} />

        	</div>
    	</HashRouter>,
	document.getElementById('app')
);