import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



 class PublicCampgroundItem extends Component {

  

  
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
        </div>
      </div>
    )
  }
}

PublicCampgroundItem.propTypes = {
  deleteCampground: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {})(withRouter(PublicCampgroundItem))