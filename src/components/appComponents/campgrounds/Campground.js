import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteCampground} from '../../../actions/deleteActions';


 class Campground extends Component {

  onDeleteClick(id ) {
    this.props.deleteCampground(id, this.props.history)
  }

  
  render() { 
    const {campground} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{campground.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

            
                <li className='list-group-item'>{campground.image}</li>
                <li className='list-group-item'>{campground.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror campground campgrounds</div>

       <Link  to={`/editcampground/${campground._id}`} className='text-white btn btn-success'>Edit</Link>
        <button className='btn btn-danger text-white'  onClick={this.onDeleteClick.bind(this, campground._id)}>Delete</button>
        </div>




        
      </div>
    )
  }
}

Campground.propTypes = {
  deleteCampground: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {deleteCampground})(withRouter(Campground))