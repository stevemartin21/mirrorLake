import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteAttraction} from '../../../actions/deleteActions';


 class Attraction extends Component {

  onDeleteClick(id ) {
    this.props.deleteAttraction(id, this.props.history)
  }

  
  render() { 
    const {attraction} = this.props
    return (
      <div className='container'>

        <div className='card mt-5 mb-5'>
          <div className='card-header p3 text-center'>{attraction.name}</div>
          <div className='card-body'>

            <ul className='list-group'>

            
                <li className='list-group-item'>{attraction.image}</li>
                <li className='list-group-item'>{attraction.description}</li>
            </ul>
          
          
          </div>

          <div className='card-footer text-center'>Mirror attraction attractions</div>

       <Link  to={`/editattraction/${attraction._id}`} className='text-white btn btn-success'>Edit</Link>
        <button className='btn btn-danger text-white'  onClick={this.onDeleteClick.bind(this, attraction._id)}>Delete</button>
        </div>




        
      </div>
    )
  }
}

Attraction.propTypes = {
  deleteAttraction: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {deleteAttraction})(withRouter(Attraction))