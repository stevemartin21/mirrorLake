import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateTrail} from '../../../actions/updateActions';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class EditTrails extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       distance: '',
       elevationGain: '',
       description: '',
       hike: ''
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
          description: response.data.description,
          hike: response.data.hike
        })
      }).catch(err => console.log(err))
   }

   onChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.type);
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

   onSubmit = (e) => {
    e.preventDefault();
    const { id } =  this.props.match.params;
    console.log('it was submitted');
     
     const updatedTrail = {
       name: this.state.name,
       elevationGain: this.state.elevationGain,
       distance: this.state.distance,
       description: this.state.description,
       hike: this.state.hike
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

                    <select className="browser-default custom-select"
                      type='text'
                      name='hike'
                      onChange={this.onChange}
                      value={this.state.hike}
                    >
                        <option>Hiking Distance</option>
                        <option value="none">None</option>
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                      </select>
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
                        value={this.state.elevation}
                        name='elevation'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    

                    <div className='md-form'>
                  <MDBInput type="textarea" 
                  label="Description" 
                  rows="5"
                  name='description'
                  onChange={this.onChange}
                  value={this.state.description}
                  className='form-control form-control-lg'  
                  
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
