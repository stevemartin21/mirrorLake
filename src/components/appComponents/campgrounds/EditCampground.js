import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateCampground} from '../../../actions/updateActions';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class EditCampground extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       spot: '',
       description: '',
       parking: false,
        rv: false,
        campgrounds: false,
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/campground/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          spot: response.data.spot,
          description: response.data.description,
          parking: response.data.parking,
          rv: response.data.rv,
          campgrounds: response.data.campgrounds
        })
      }).catch(err => console.log(err))
   }

   onChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);
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
     
     const updatedCampground = {
       name: this.state.name,
       spot: this.state.spot,
       description: this.state.description,
       parking: this.state.parking,
        rv: this.state.rv,
        campgrounds: this.state.campgrounds,
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
                    <select className="browser-default custom-select"
                        type='text'
                        name='spot'
                        onChange={this.onChange}
                        value={this.state.spot}
                        >
                            <option>Camping Spots</option>
                            <option value="5"> 5</option>
                            <option value="10">10 </option>
                            <option value="15">15</option>
                            <option value="> 20">> 20</option>
                        </select>
                        </div>

                            <div className='md-form'>
                            <MDBInput
                            label="Parking Available" 
                            type="checkbox" 
                            id="checkbox1"
                            name='parking'
                            onChange={this.onChange}
                            checked={this.state.parking}
                            />
                            </div>
                                <div className='md-form'>
                                <MDBInput
                                label="RV Hookups" 
                                type="checkbox" 
                                id="checkbox2"
                                name='rv'
                                onChange={this.onChange}
                                checked={this.state.rv}
                                />
                                </div>
                                <div className='md-form'>
                                <MDBInput
                                label="Designated Campgrounds"
                                
                                type="checkbox"
                                id="checkbox3"
                                name='campgrounds'
                                onChange={this.onChange}
                                checked={this.state.campgrounds}
                                
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
