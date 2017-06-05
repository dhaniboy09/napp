import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../public-path';
import Home from './components/containers/Home';
import Source from './components/Source';
import Article from './components/Article';
import About from './components/About';
import ContactUs from './components/ContactUs';

const history = createBrowserHistory();

/*
 * This function checks if a user is 
 * authenticated
 *
 * @function isAuthenticated
 * @return {bool}
 */
function isAuthenticated() {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
  }

/*
 * Sets Routes
 *
 * @return {void}
 */
render (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          exact path="/source" render={() => (
            isAuthenticated() ? (
              <Source />
            ) : (
              
              <Home />
            )
          )} 
        />
        <Route path="/articles/:id/:sort" component={Article} />
        <Route path="/about" component={About} /> 
        <Route path="/contact" component={ContactUs} />
      </Switch>

    </div>
  </Router>,
	document.getElementById('app')
);
