import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createRiver} from '../../../actions/createActions';
import {withRouter} from 'react-router-dom';
import river from '../../../images/provoRiver.JPG';

import {  MDBInput, MDBFormInline} from "mdbreact";

 class AddRiver extends Component {

     state={
        name: '',
        image: '',
        description: '',
        sizeDesc: '',
        type: '',
        length: '',
        origin: ''
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
         e.preventDefault()
         const newRiver = {
             name: this.state.name,
             image: this.state.image,
             description: this.state.description,
             sizeDesc: this.state.sizeDesc,
             type: this.state.type,
             length: this.state.length,
             origin: this.state.origin
         }

         console.log(newRiver);

         this.props.createRiver(newRiver, this.props.history);
     }


  render() {
    return (
    <div>
        <div className=' card card-image' style={{backgroundImage: `url(${river})`, backgroundSize: 'cover'}} >
      <div className='container mt-5 mb-5'>

        <div className='card addInput'>
            <div className='card-header'>Add River</div>
            <div className='card-body'>
                <form onSubmit={this.onSubmit}>
                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Name'
                                className='form-control form-control-lg'
                                name='name'
                                onChange={this.onChange}
                                value={this.state.name}
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
                                type='text'
                                placeholder='Image'
                                className='form-control form-control-lg'
                                name='image'
                                onChange={this.onChange}
                                value={this.state.image}
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

AddRiver.propTypes = {
    createRiver: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {createRiver})(withRouter(AddRiver))
