import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';




 class PublicRiverItem extends Component {

  

  
  render() { 
    const {river} = this.props
    return (
      <div className='container'>
        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{river.name}</div>
          <div className='card-body'>
            <ul className='list-group'>
            <li className='list-group-item'>{river.image}</li> 
                <li className='list-group-item'>{river.description}</li>
            </ul>
          </div>
          <div className='card-footer text-center'>Mirror Lake Area Rivers</div>
        </div>
      </div>
    )
  }
}

PublicRiverItem.propTypes = {
  
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {})(withRouter(PublicRiverItem))