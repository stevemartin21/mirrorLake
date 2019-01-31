import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteTrail} from '../../../actions/deleteActions';
import AddTrail from './AddTrail';


 class Trail extends Component {

  onDeleteClick(id ) {
    this.props.deleteTrail(id, this.props.history)
  }

  
  render() { 
    const {trail} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{trail.name}</div>
          <div className='card-body'>

            <ul className='list-group'>
            <li className='list-group-item'>{trail.distance}</li>
            <li className='list-group-item'>{trail.elevationGain}</li>
                
                <li className='list-group-item'>{trail.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror peak peaks</div>

       <Link  to={`/editTrail/${trail._id}`} className='text-white btn btn-success'>Edit</Link>
        <button className='btn btn-danger text-white'  onClick={this.onDeleteClick.bind(this, trail._id)}>Delete</button>
        </div>




        
      </div>
    )
  }
}

Trail.propTypes = {
  deleteTrail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {deleteTrail})(withRouter(Trail))