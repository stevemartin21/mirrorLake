import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createRiver} from '../../../actions/createActions';
import {withRouter} from 'react-router-dom';

 class AddRiver extends Component {

     state={
        name: '',
        image: '',
        description: ''
     }

     onChange = (e) => {
         this.setState({
           [e.target.name]: e.target.value  
         })
     }

     onSubmit = (e) => {
         const newRiver = {
             name: this.state.name,
             image: this.state.image,
             description: this.state.description
         }

         console.log(newRiver);
     }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>
            <div className='card-header'>Add River</div>
            <div className='card-body'>
                <form onSubmit={this.onSubmit}>
                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Name'
                                className='form-control form-control-lg'
                                name='name'
                                onChange={this.onChange}
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Image'
                                className='form-control form-control-lg'
                                name='image'
                                onChange={this.onChange}
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Description'
                                className='form-control form-control-lg'
                                name='description'
                                onChange={this.onChange}
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
    )
  }
}

AddRiver.propTypes = {
    createRiver: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {createRiver})(withRouter(AddRiver))
