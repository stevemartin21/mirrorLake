import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/layout/Navigation';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Register from './components/authenAuthor/Register';
import Login from './components/authenAuthor/Login';
import store from './store';
import PrivateRouter from './components/PrivateRouter';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utilities/setAuthToken';
import { setCurrentUser, logoutUser} from './actions/authActions';
import AddLake from './components/appComponents/AddLake';
import Dashboard from './components/appComponents/Dashboard';
import ManageLakes from './components/appComponents/ManageLakes';
import EditLake from './components/appComponents/EditLake';

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <Navigation />
        
        <div className='container'>
        <Route exact path='/' component={ Home } />
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
        <Switch>  
        <PrivateRouter exact path='/addLake' component={AddLake} />
        <PrivateRouter exact path='/dashboard' component={Dashboard} />
        <PrivateRouter exact path='/manageLakes' component={ManageLakes} />
        <PrivateRouter exact path='/editLake/:id' component={EditLake} />
        </Switch>
        </div>
        <Footer />



      </div>
      </Router>
      </Provider>
     
    );
  }
}

export default App;