import React, { Component } from 'react';
import classnames from 'classnames';
import {connect } from 'react-redux';
import {registerUser} from '../../actions/authActions';
import PropTypes  from 'prop-types';
import {withRouter} from 'react-router-dom';
import highway from '../../images/highway1.JPG';

 class Register extends Component {

     constructor() {
         super()
         this.state = {
             name: '',
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
         if(nextProps.errors) {
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
             name: this.state.name,
             email: this.state.email,
             password: this.state.password
         }
         console.log(newUser)
         this.props.registerUser(newUser, this.props.history)
     }
  render() {
      const { errors} = this.state;
      const {user} = this.props.auth;
    return (
    <div>
    <div className=' card card-image' style={{backgroundImage: `url(${highway})`, backgroundSize: 'cover'}} >
      <div className='container pt-5 pb-5 '>
        <div className='card  '>
            <div className='card-header elegant-color text-white  '>Register</div>
        <div className='card-body'>
        <form onSubmit={this.onSubmit}>
            <div className='md-form'>
                <input 
                    type='text'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.onChange}
                    name='name'
                    className={classnames('form-control', {
                        'is-invalid' : errors.name
                    })}
                />
                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
            </div>

            <div className='md-form'>
                <input 
                    type='text'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.onChange}
                    name='email'
                    className='form-control'
                />
            </div>

            <div className='md-form'>
                <input 
                    type='text'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.onChange}
                    name='password'
                    className='form-control'
                />
            </div>

            <input 
                type='submit'
                className='btn btn-default'
                value='Submit'
            />
        </form>
        </div>
        </div>
        
      </div>
      </div>
      </div>
    )
  }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

// need to use fucntion to grab state from the root reducer and then can use it 

export default connect(mapStateToProps, {registerUser})(withRouter(Register))

// this connects it to the state and connnects the functions registerUser
// and also makes state props that can be used in teh component
