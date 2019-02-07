import React, { Component } from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {createAttraction} from '../../../actions/createActions';
import attraction from '../../../images/attraction1.JPG';

 class AddAttractions extends Component {

    state = {
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
        e.preventDefault();

        const newAttraction = {
            name: this.state.name,
            image: this.state.image,
            description: this.state.description
        }

        console.log(newAttraction);

        this.props.createAttraction(newAttraction, this.props.history)
    }


  render() {
    return (
      <div>
          <div className=' card card-image' style={{backgroundImage: `url(${attraction})`, backgroundSize: 'cover'}} >
          <div className='container mt-5 mb-5'>

                <div className='card addInput'>
                    <div className='card-header'>Add Attraction</div>
                
                    <div className='card-body'>

                        <form onSubmit={this.onSubmit}>
                                <div className='md-form'>
                                    <input 
                                        type='text'
                                        placeholder='Name'
                                        className='form-control form-control-lg'
                                        onChange={this.onChange}
                                        name='name'
                                    />
                                </div>

                              

                                <div className='md-form'>
                                    <input 
                                        type='text'
                                        placeholder='Image'
                                        className='form-control form-control-lg'
                                        onChange={this.onChange}
                                        name='image'
                                    />
                                </div>

                                <div className='md-form'>
                                    <input 
                                        type='text'
                                        placeholder='Description'
                                        className='form-control form-control-lg'
                                        onChange={this.onChange}
                                        name='description'
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

AddAttractions.propTypes = {
   errors: PropTypes.object.isRequired,
   createAttraction: PropTypes.func.isRequired 
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {createAttraction})(withRouter(AddAttractions))
