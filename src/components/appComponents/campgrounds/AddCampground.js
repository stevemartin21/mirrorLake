import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {createCampground} from '../../../actions/createActions';
import campground from '../../../images/attraction2.JPG';
import {  MDBInput, MDBFormInline} from "mdbreact";


 class AddCampground extends Component {
     state= {
        name: '',
        spot: '',
        description: '',
        parking: false,
        rv: false,
        campgrounds: false,
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

         const newCampground = {
             name: this.state.name,
             spot: this.state.spot,
             description: this.state.description,
             parking: this.state.parking,
            rv: this.state.rv,
            campgrounds: this.state.campgrounds,
         }

         console.log(newCampground);

         this.props.createCampground(newCampground, this.props.history)
     }


  render() {
    return (
        <div>
             <div className=' card card-image' style={{backgroundImage: `url(${campground})`, backgroundSize: 'cover'}} >
      <div className='container mt-5 mb-5'>

            <div className='card addInput'>
                <div className='card-header'>Add Campground</div>

                <div className='card-body'>

                    <form onSubmit={this.onSubmit}>

                            <div className='md-form'>
                                <input 
                                    type='text'
                                    placeholder='Name'
                                    className='form-control form-control-lg'
                                    name='name'
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className='md-form'>

                        <select className="browser-default custom-select"
                        type='text'
                        name='spot'
                        onChange={this.onChange}
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
                                    className='form-control form-control-lg'  
                                    
                                    />
                                    </div>
                            <input 

                                type='submit'
                                className='btn btn-success'
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

AddCampground.propTypes = {
    errors: PropTypes.object.isRequired,
    createCampground: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {createCampground})(withRouter(AddCampground))
