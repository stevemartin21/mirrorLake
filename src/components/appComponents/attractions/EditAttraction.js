import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateAttraction} from '../../../actions/updateActions';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class EditAttraction extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       image: '',
       description: '',
       hike: '',
      parking: false,
      rv: false,
      campgrounds: false,
      type: ''
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/attraction/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          image: response.data.image,
          description: response.data.description,
          hike: response.data.hike,
          type: response.data.type,
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
     
     const updatedAttraction = {
       name: this.state.name,
       image: this.state.image,
       description: this.state.description,
       hike: this.state.hike,
       parking: this.state.parking,
       rv: this.state.rv,
       campgrounds: this.state.campgrounds,
       type: this.state.type
     }

     console.log(updatedAttraction)
     this.props.updateAttraction(id, updatedAttraction, this.props.history)
   }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>

            <div className='card-header'>Update Attraction</div>

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
  name='type'
  onChange={this.onChange}
  value={this.state.type}
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
                        placeholder='Image'
                        type='text'
                        value={this.state.image}
                        name='image'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
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

EditAttraction.propTypes = {
  updateAttraction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  attraction: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  attraction: state.lake
})

export default connect(mapStateToProps, { updateAttraction})(withRouter(EditAttraction))
