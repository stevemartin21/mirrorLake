import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {createPeak} from '../../../actions/createActions';
import peak from '../../../images/haydenPeak.JPG';


 class AddPeak extends Component {

    state= {
      name: '',
      elevation: '',
      prominence: '',
      description: ''
    }

    onChange = (e) => {
        this.setState = ({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newPeak = {
            name: this.state.name,
            elevation: this.state.elevation,
            prominence: this.state.prominence,
            description: this.state.description
        }

        console.log(newPeak);
        this.props.createPeak(newPeak, this.props.history)
    }


  render() {
    return (
    <div>
         <div className=' card card-image' style={{backgroundImage: `url(${peak})`, backgroundSize: 'cover'}} >
      <div className='container mt-5 mb-5'>

            <div className='card addInput'>

                <div className='card-header'>Add Peak</div>

                <div className='card-body'>

                    <form onSubmit={this.onSubmit}>

                            <div className='md-form'>
                                <input 
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    className='form-control form-control-lg'
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='md-form'>
                                <input 
                                    type='text'
                                    placeholder='Elevation'
                                    name='elevation'
                                    className='form-control form-control-lg'
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='md-form'>
                                <input 
                                    type='text'
                                    placeholder='Prominence'
                                    name='prominence'
                                    className='form-control form-control-lg'
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='md-form'>
                                <input 
                                    type='text'
                                    placeholder='Description'
                                    name='description'
                                    className='form-control form-control-lg'
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
            </div>
        
      </div>
    )
  }
}

AddPeak.propTypes = {
    createPeak: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {createPeak}) (withRouter(AddPeak));
