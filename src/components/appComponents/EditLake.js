import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateLake} from '../../actions/updateActions';


 class EditLake extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       size: '',
       image: '',
       description: ''
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
          description: response.data.description
        })
      }).catch(err => console.log(err))
   }

   onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   onSubmit = (e) => {
    e.preventDefault();
    const { id } =  this.props.match.params;
    console.log('it was submitted');
     
     const updatedLake = {
       name: this.state.name,
       size: this.state.size,
       image: this.state.image,
       description: this.state.description
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
                        placeholder='Size'
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
                      <input 
                        placeholder='Description'
                        type='text'
                        value={this.state.description}
                        name='description'
                        className='form-control form-control-lg'
                        onChange={this.onChange}
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
