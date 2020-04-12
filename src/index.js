import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={withRouter(Root)} />
      <Route exact path='/login' component={withRouter(Login)} />
      <Route exact path='/rejestracja' component={withRouter(Register)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your Root to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
