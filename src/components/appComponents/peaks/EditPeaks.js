import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updatePeak} from '../../../actions/updateActions';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class EditPeaks extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       elevation: '',
       prominence: '',
       description: '',
       hike: '',
       elevationGain: ''
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/peak/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          elevation: response.data.elevation,
          prominence: response.data.prominence,
          description: response.data.description,
          hike: response.data.hike,
          elevationGain: response.data.elevationGain
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
     
     const updatedPeak = {
       name: this.state.name,
       elevation: this.state.elevation,
       prominence: this.state.prominence,
       description: this.state.description,
       hike: this.state.hike,
       elevationGain: this.state.elevationGain
     }

     console.log(updatedPeak)
     this.props.updatePeak(id, updatedPeak, this.props.history)
   }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>

            <div className='card-header'>Update Peak</div>

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
                        placeholder='Elevation'
                        type='text'
                        value={this.state.image}
                        name='elevation'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='md-form'>
                      <input 
                        placeholder='Prominence'
                        type='text'
                        value={this.state.prominence}
                        name='prominence'
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
                                    type='text'
                                    placeholder='Elevation Gain from Trailhead'
                                    name='elevationGain'
                                    className='form-control form-control-lg'
                                    onChange={this.onChange}
                                    value={this.state.elevationGain}
                                />
                            </div>

                            <div className='md-form'>
                                    <MDBInput type="textarea" 
                                    label="Description" 
                                    rows="5"
                                    name='description'
                                    onChange={this.onChange}
                                    className='form-control form-control-lg'  
                                    value={this.state.description}
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

EditPeaks.propTypes = {
  updatePeak: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  peak: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  peak: state.peak
})

export default connect(mapStateToProps, { updatePeak})(withRouter(EditPeaks))
