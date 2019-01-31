import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router-dom';
import axios from 'axios';
import classnames from 'classnames';
import {updateAttraction} from '../../../actions/updateActions';


 class EditAttraction extends Component {
   constructor() {
     super()
     this.state = {
       name: '',
       image: '',
       description: ''
     }
   }

   componentDidMount() {
    const { id } =  this.props.match.params;

    axios.get(`http://localhost:3001/read/attraction/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
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
     
     const updatedAttraction = {
       name: this.state.name,
       image: this.state.image,
       description: this.state.description
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
