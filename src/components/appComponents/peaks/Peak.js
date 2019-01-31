import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deletePeak} from '../../../actions/deleteActions';


 class Peak extends Component {

  onDeleteClick(id ) {
    this.props.deletePeak(id, this.props.history)
  }

  
  render() { 
    const {peak} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{peak.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

            <li className='list-group-item'>{peak.prominence}</li>
                <li className='list-group-item'>{peak.elevation}</li>
                <li className='list-group-item'>{peak.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror peak peaks</div>

       <Link  to={`/editPeak/${peak._id}`} className='text-white btn btn-success'>Edit</Link>
        <button className='btn btn-danger text-white'  onClick={this.onDeleteClick.bind(this, peak._id)}>Delete</button>
        </div>




        
      </div>
    )
  }
}

Peak.propTypes = {
  deletePeak: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {deletePeak})(withRouter(Peak))