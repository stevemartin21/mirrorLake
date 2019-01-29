import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {createCampground} from '../../../actions/createActions';


 class AddCampground extends Component {
     state= {
        name: '',
        spots: '',
        description: ''
     }

     onChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     onSubmit = (e) => {
         e.preventDefault();

         const newCampground = {
             name: this.state.name,
             spots: this.state.spots,
             description: this.state.description
         }

         this.props.createCampground(newCampground, this.props.history)
     }


  render() {
    return (
      <div className='container mt-5 mb-5'>

            <div className='card'>
                <div className='card-header'>Add Campground</div>

                <div className='card-body'>

                    <form onSubmit={this.obSubmit}>

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
                                    placeholder='Spots'
                                    className='form-control form-control-lg'
                                    name='spots'
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='md-form'>
                                <input 
                                    type='text'
                                    placeholder='Descripton'
                                    className='form-control form-control-lg'
                                    name='description'
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

AddCampground.propTypes = {
    errors: PropTypes.object.isRequired,
    createCampground: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {createCampground})(withRouter(AddCampground))
