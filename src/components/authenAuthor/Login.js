import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {loginUser} from '../../actions/authActions';
import classnames from 'classnames';

 class Login extends Component {
     constructor() {
         super()
         this.state= {
             email: '',
             password: '',
             errors: {}
         }
     }

     componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
      }

     componentWillReceiveProps(nextProps) {

        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
         if( nextProps.errors) {
             this.setState({
                 errors: nextProps.errors
             })
         }
     }

     onChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     onSubmit = (e) => {
         e.preventDefault();
         const newUser = {
             email: this.state.email,
             password: this.state.password
         }

         this.props.loginUser(newUser);
     }
  render() {
      const {errors} = this.state
    return (
      <div className='container mt-5 mb-5'>
          <div className='card mb-5'>

                <div className='card-header elegant-color text-white'>Login</div>

                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                    <div className='md-form'>
                        <input 
                            type='text'
                            placeholder='Email'
                            value={this.state.email}
                            name='email'
                            className='form-control'
                            onChange={this.onChange}
                        />
                    </div>
                    <div className='md-form'>
                        <input 
                            type='text'
                            placeholder='Password'
                            value={this.state.password}
                            name='password'
                            className='form-control'
                            onChange={this.onChange} 
                        />
                    </div>
                    <input 
                        type='submit'
                        className='btn btn-success'
                        value='Submit'
                    />
                    </form>
                </div>
          </div>
      </div>
    )
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login)
