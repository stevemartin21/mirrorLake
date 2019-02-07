import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



 class PublicPeakItem extends Component {

  

  
  render() { 
    const {peak} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5 addInput'>
          <div className='card-header p3 text-center'>{peak.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

            <li className='list-group-item'>{peak.prominence}</li>
                <li className='list-group-item'>{peak.elevation}</li>
                <li className='list-group-item'>{peak.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror peak peaks</div>

       
        </div>




        
      </div>
    )
  }
}

PublicPeakItem.propTypes = {
  
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {})(withRouter(PublicPeakItem))