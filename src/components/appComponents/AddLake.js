import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classname from 'classnames';
import PropTypes from 'prop-types';
import {createLake } from '../../actions/createActions';

class AddLake extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      size: '',
      description: '',
      image: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit =(e) => {
    e.preventDefault();

    const newLake = {
      name: this.state.name,
      size: this.state.size,
      image: this.state.image,
      description: this.state.description
    }

    console.log(newLake);

    this.props.createLake(newLake, this.props.history)

    
  }



  render() {
    return (
      <div>
        <div className='container mt-5 mb-5'>

            <div className='card'>

              <div className='card-header'>Add a Lake</div>

              <div className='card-body'>

                <form onSubmit={this.onSubmit}>

                    <div className='md-form'>

                      <input 
                        placeholder='Name'
                        type='text'
                        name='name'
                        onChange={this.onChange}
                        className='form-control form-control-lg'
                      />
                    </div>

                    <div className='md-form'>

                    <input 
                      placeholder='Size'
                      type='text'
                      name='size'
                      onChange={this.onChange}
                      className='form-control form-control-lg'


                    />

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

                <input 
                  placeholder='Description'
                  type='text'
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
