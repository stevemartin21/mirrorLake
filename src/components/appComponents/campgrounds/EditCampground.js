import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateCampground} from '../../../actions/updateActions';


 class EditCampground extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       spots: '',
       description: ''
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/campground/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          spots: response.data.spots,
          description: response.data.description
        })
      }).catch(err => console.log(err))
   }

   onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   onSubmit = (e) => {
    e.preventDefault();
    const { id } =  this.props.match.params;
    console.log('it was submitted');
     
     const updatedCampground = {
       name: this.state.name,
       spots: this.state.spots,
       description: this.state.description
     }

     console.log(updatedCampground)
     this.props.updateCampground(id, updatedCampground, this.props.history)
   }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>

            <div className='card-header'>Update Campground</div>

            <div className='card-body'>

                <form onSubmit={this.onSubmit}>

                    <div className='md-form'>
                      <input 
                        placeholder='Name'
                        type='text'
                        value={this.state.name}
                        name='name'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='md-form'>
                      <input 
                        placeholder='Spots'
                        type='text'
                        value={this.state.image}
                        name='spots'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='md-form'>
                      <input 
                        placeholder='Description'
                        type='text'
                        value={this.state.description}
                        name='description'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <input 
                      type='submit'
                      value='Update'
                      className='btn btn-default'
                    />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

EditCampground.propTypes = {
  updateCampground: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  campground: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  campground: state.lake
})

export default connect(mapStateToProps, { updateCampground})(withRouter(EditCampground))
