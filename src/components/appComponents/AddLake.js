import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classname from 'classnames';
import PropTypes from 'prop-types';
import {createLake } from '../../actions/createActions';
import lake from '../../images/washington1.JPG';
import {  MDBInput, MDBFormInline} from "mdbreact";

class AddLake extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      size: '',
      description: '',
      image: '',
      sizeDesc: '',
      hike: '',
      parking: false,
      rv: false,
      campgrounds: false
    }
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

  onSubmit =(e) => {
    e.preventDefault();

    const newLake = {
      name: this.state.name,
      size: this.state.size,
      image: this.state.image,
      description: this.state.description,
      sizeDesc: this.state.sizeDesc,
      hike: this.state.hike,
      parking: this.state.parking,
      rv: this.state.rv,
      campgrounds: this.state.campgrounds
      
    }

    console.log(newLake);

    this.props.createLake(newLake, this.props.history)

    
  }



  render() {
    return (
      <div>
          <div className=' card card-image' style={{backgroundImage: `url(${lake})`, backgroundSize: 'cover'}} >
        <div className='container mt-5 mb-5'>

            <div className='card addInput'>

              <div className='card-header'>Add a Lake</div>

              <div className='card-body'>

                <form onSubmit={this.onSubmit}>

                    <div className='md-form'>

                      <input 
                        placeholder=' Lake Name'
                        type='text'
                        name='name'
                        onChange={this.onChange}
                        className='form-control form-control-lg'
                      />
                    </div>

                    <div className='md-form'>

                    <input 
                      placeholder='Surface area in acres'
                      type='text'
                      name='size'
                      onChange={this.onChange}
                      className='form-control form-control-lg'


                    />

                    </div>

                    <div className='md-form'>

                    <select className="browser-default custom-select"
                      type='text'
                      name='sizeDesc'
                      onChange={this.onChange}
                    >
                        <option>Choose your Lake Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="huge">Huge</option>
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
                    placeholder='Image'
                    type='text'
                    name='image'
                    onChange={this.onChange}
                    className='form-control form-control-lg'


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
                  className='btn btn-success'
                  value='submit'
                
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

AddLake.propTypes = {
  createLake: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  lake: state.lake
})

export default connect(mapStateToProps, {createLake})(withRouter(AddLake));
