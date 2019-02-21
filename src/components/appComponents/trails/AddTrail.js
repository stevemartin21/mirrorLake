import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createTrail} from '../../../actions/createActions';
import PropTypes from 'prop-types';
import trail from '../../../images/provoRiverTrail.JPG';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class AddTrail extends Component {

    state = {
        name: '',
        distance: '',
        elevationGain: '',
        description: '',
        hike: ''
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
        const newTrail = {
            name: this.state.name,
            distance: this.state.distance,
            elevationGain: this.state.elevationGain,
            description: this.state.description,
            hike: this.state.hike
        }

        console.log(newTrail)

        this.props.createTrail(newTrail, this.props.history)
    }


  render() {
    return (
        <div>
            <div className=' card card-image' style={{backgroundImage: `url(${trail})`, backgroundSize: 'cover'}} >
      <div className='container mt-5 mb-5'>

            <div className='card addInput'>

                <div className='card-header'>Add Trail</div>

                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Name'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='name'
                                value={this.state.name}
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
                                placeholder='Distance'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='distance'
                                value={this.state.distance}
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Elevation Gain'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='elevationGain'
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

AddTrail.proptypes  = {
    createTrail: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors

})

export default connect(mapStateToProps, {createTrail})(withRouter(AddTrail));
