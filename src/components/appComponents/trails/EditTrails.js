import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateTrail} from '../../../actions/updateActions';


 class EditTrails extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       distance: '',
       elevationGain: '',
       description: ''
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/trail/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          elevationGain: response.data.elevationGain,
          distance: response.data.distance,
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
     
     const updatedTrail = {
       name: this.state.name,
       elevationGain: this.state.elevationGain,
       distance: this.state.distance,
       description: this.state.description
     }

     console.log(updatedTrail)
     this.props.updateTrail(id, updatedTrail, this.props.history)
   }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>

            <div className='card-header'>Update Trail</div>

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
                        placeholder='Distance'
                        type='text'
                        value={this.state.distance}
                        name='elevation'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='md-form'>
                      <input 
                        placeholder='Trail'
                        type='text'
                        value={this.state.trail}
                        name='elevation'
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

EditTrails.propTypes = {
  updateTrail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  trail: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  trail: state.trail
})

export default connect(mapStateToProps, { updateTrail})(withRouter(EditTrails))
