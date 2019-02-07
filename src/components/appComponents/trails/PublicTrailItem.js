import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



 class PublicTrailItem extends Component {

  

  
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

          <div className='card-footer text-center'>Mirror Lake Area Trails</div>

      
        </div>




        
      </div>
    )
  }
}

PublicTrailItem.propTypes = {
 
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {})(withRouter(PublicTrailItem))