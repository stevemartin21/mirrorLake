import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteRiver} from '../../../actions/deleteActions';
import AddRiver from './AddRiver';


 class River extends Component {

  onDeleteClick(id ) {
    this.props.deleteRiver(id, this.props.history)
  }

  
  render() { 
    const {river} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{river.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

            <li className='list-group-item'>{river.image}</li>
            <li className='list-group-item'>{river.sizeDesc}</li>
            <li className='list-group-item'>{river.type}</li>
            <li className='list-group-item'>{river.length}</li> 
            <li className='list-group-item'>{river.origin}</li>
                <li className='list-group-item'>{river.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror Lake Area Rivers</div>

       <Link  to={`/editRiver/${river._id}`} className='text-white btn btn-success'>Edit</Link>
        <button className='btn btn-danger text-white'  onClick={this.onDeleteClick.bind(this, river._id)}>Delete</button>
        </div>




        
      </div>
    )
  }
}

River.propTypes = {
  deleteRiver: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {deleteRiver})(withRouter(River))