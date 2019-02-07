import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



 class PublicAttractionItem extends Component {

 

  
  render() { 
    const {attraction} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5 addInput'>
          <div className='card-header p3 text-center'>{attraction.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

            
                <li className='list-group-item'>{attraction.image}</li>
                <li className='list-group-item'>{attraction.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror attraction attractions</div>

       
        </div>




        
      </div>
    )
  }
}

PublicAttractionItem.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {})(withRouter(PublicAttractionItem))