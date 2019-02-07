import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



 class PublicLakeItem extends Component {

  render() { 
    const {lake} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5 addInput'>
          <div className='card-header p3 text-center'>{lake.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

                <li className='list-group-item'>{lake.size}</li>
                <li className='list-group-item'>{lake.image}</li>
                <li className='list-group-item'>{lake.description}</li>
            
            
            </ul>
          </div>

          <div className='card-footer text-center'>Mirror Lake Lakes</div>
        </div>
      </div>
    )
  }
}

PublicLakeItem.propTypes = {
  
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {})(withRouter(PublicLakeItem))
