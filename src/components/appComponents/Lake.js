import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteLake} from '../../actions/deleteActions';


 class Lake extends Component {

  onDeleteClick(id ) {
    this.props.deleteLake(id, this.props.history)
  }

  
  render() { 
    const {lake} = this.props;
    let parking;
    let rv;
    let campgrounds;
    console.log(lake);
    if(lake.parking == true) {
      parking = 'Yes'
    } else {
      parking = 'No'
    }

    if(lake.rv == true) {
      rv = 'Yes'
    } else {
      rv = 'No'
    }

    if(lake.campgrounds == true) {
      campgrounds = 'Yes'
    } else {
      campgrounds = 'No'
    }
    return (
      <div className='container'>

        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{lake.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

                <li className='list-group-item'>{lake.size}</li>
                <li className='list-group-item'>{lake.image}</li>
                <li className='list-group-item'>{lake.description}</li>
                <li className='list-group-item'>{lake.sizeDesc}</li>
                <li className='list-group-item'>{lake.hike}</li>
                <li className='list-group-item'>Parking Available: {parking}</li>
                <li className='list-group-item'>RV hookups: {rv}</li>
                <li className='list-group-item'>Assigned Campgrounds: {campgrounds}</li>
            
            
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror Lake Lakes</div>

       <Link  to={`/editLake/${lake._id}`} className='text-white btn btn-success'>Edit</Link>
        <button className='btn btn-danger text-white'  onClick={this.onDeleteClick.bind(this, lake._id)}>Delete</button>
        </div>




        
      </div>
    )
  }
}

Lake.propTypes = {
  deleteLake: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {deleteLake})(withRouter(Lake))
