import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/layout/Navigation';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Register from './components/authenAuthor/Register';
import Login from './components/authenAuthor/Login';
import store from './store';



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
        
        </div>
        <Footer />



      </div>
      </Router>
      </Provider>
     
    );
  }
}

export default App;