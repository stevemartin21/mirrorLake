import React, { Component } from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {createAttraction} from '../../../actions/createActions';
import attraction from '../../../images/attraction1.JPG';
import {  MDBInput, MDBFormInline} from "mdbreact";

 class AddAttractions extends Component {

    state = {
        name: '',
        image: '',
        description: '',
        hike: '',
      parking: false,
      rv: false,
      campgrounds: false,
      type: ''
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

        const newAttraction = {
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            hike: this.state.hike,
                parking: this.state.parking,
                rv: this.state.rv,
                campgrounds: this.state.campgrounds,
                type: this.state.type
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

                    <select className="browser-default custom-select"
                      type='text'
                      name='type'
                      onChange={this.onChange}
                    >
                        <option>Type of Attraction</option>
                        <option value="waterfall">Waterfall</option>
                        <option value="historical">Historical</option>
                        <option value="natural">Natural</option>
                        <option value="other">Other</option>
                      </select>
                    </div>          

                    <div className='md-form'>

                    <select className="browser-default custom-select"
                      type='text'
                      name='hike'
                      onChange={this.onChange}
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
                                        placeholder='Image'
                                        className='form-control form-control-lg'
                                        onChange={this.onChange}
                                        name='image'
                                    />
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
                  className='form-control form-control-lg'  
                  
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
