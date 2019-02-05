import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createTrail} from '../../../actions/createActions';
import PropTypes from 'prop-types'


 class AddTrail extends Component {

    state = {
        name: '',
        distance: '',
        elevationGain: '',
        description: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newTrail = {
            name: this.state.name,
            distance: this.state.distance,
            elevationGain: this.state.elevationGain,
            description: this.state.description
        }

        console.log(newTrail)

        this.props.createTrail(newTrail, this.props.history)
    }


  render() {
    return (
      <div className='container mt-5 mb-5'>

            <div className='card'>

                <div className='card-header'>Add Trail</div>

                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Name'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='name'
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Distance'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='distance'
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Elevation Gain'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='elevationGain'
                            />
                        </div>

                        <div className='md-form'>
                            <input 
                                type='text'
                                placeholder='Description'
                                onChange={this.onChange}
                                className='form-control form-control-lg'
                                name='description'
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
    )
  }
}

AddTrail.proptypes  = {
    createTrail: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors

})

export default connect(mapStateToProps, {createTrail})(withRouter(AddTrail));
