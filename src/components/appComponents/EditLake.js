import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateLake} from '../../actions/updateActions';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class EditLake extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       size: '',
       image: '',
       description: '',
       sizeDesc: '',
      hike: '',
      parking: false,
      rv: false,
      campgrounds: false
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/lake/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          size: response.data.size,
          image: response.data.image,
          description: response.data.description,
          sizeDesc: response.data.sizeDesc,
          hike: response.data.hike,
          parking: response.data.parking,
          rv: response.data.rv,
          campgrounds: response.data.campgrounds

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
     
     const updatedLake = {
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

     console.log(updatedLake)
     this.props.updateLake(id, updatedLake, this.props.history)
   }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>

            <div className='card-header'>Update Lake</div>

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
                        placeholder='Size Surface area'
                        type='text'
                        value={this.state.size}
                        name='size'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='md-form'>
                      <input 
                        placeholder='Image'
                        type='text'
                        value={this.state.image}
                        name='image'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
                      />
                    </div>

                    <div className='md-form'>

                    <select className="browser-default custom-select"
                      type='text'
                      name='sizeDesc'
                      onChange={this.onChange}
                      value={this.state.sizeDesc}
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
                  value={this.state.description}
                  name='description'
                  onChange={this.onChange}
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

EditLake.propTypes = {
  updateLake: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  lake: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  lake: state.lake
})

export default connect(mapStateToProps, { updateLake})(withRouter(EditLake))
