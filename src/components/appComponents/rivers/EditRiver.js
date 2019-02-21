import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateRiver} from '../../../actions/updateActions';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class EditRiver extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       image: '',
       description: '',
       sizeDesc: '',
        type: '',
        length: '',
        origin: ''
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/river/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          image: response.data.image,
          description: response.data.description,
          sizeDesc: response.data.sizeDesc,
          type: response.data.type,
          length: response.data.length,
          origin: response.data.origin
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
     
     const updatedRiver = {
       name: this.state.name,
       image: this.state.image,
       description: this.state.description,
       sizeDesc: this.state.sizeDesc,
      type: this.state.type,
      length: this.state.length,
      origin: this.state.origin
     }

     console.log(updatedRiver)
     this.props.updateRiver(id, updatedRiver, this.props.history)
   }


  render() {
    return (
      <div className='container mt-5 mb-5'>

        <div className='card'>

            <div className='card-header'>Update River</div>

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
                                type='text'
                                placeholder='Origin'
                                className='form-control form-control-lg'
                                name='origin'
                                onChange={this.onChange}
                                value={this.state.origin}
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Length'
                                className='form-control form-control-lg'
                                name='length'
                                onChange={this.onChange}
                                value={this.state.length}
                            />
                        </div>

                        <div className='md-form'>

                    <select className="browser-default custom-select"
                      type='text'
                      name='sizeDesc'
                      onChange={this.onChange}
                      value={this.state.sizeDesc}
                    >
                        <option>Choose your River Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="huge">Huge</option>
                      </select>
                    </div>

                    <div className='md-form'>

<select className="browser-default custom-select"
  type='text'
  name='type'
  onChange={this.onChange}
  value={this.state.type}
>
    <option>Type of River</option>
    <option value="river">River</option>
    <option value="stream">Stream</option>
    <option value="creek">Creek</option>
    <option value="fork">Fork</option>
  </select>
</div> 


                    <div className='md-form'>
                      <input 
                        placeholder='Image'
                        type='text'
                        value={this.state.image}
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

EditRiver.propTypes = {
  updateRiver: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  river: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  river: state.river
})

export default connect(mapStateToProps, { updateRiver})(withRouter(EditRiver))
