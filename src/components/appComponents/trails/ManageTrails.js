import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {readTrails} from '../../../actions/readActions';
import Trail from './Trail';

 class ManageTrails extends Component {

    componentDidMount() {
        this.props.readTrails();
    }


  render() {

    const {trails} = this.props.trail;
    let listOfTrails;

    if(trails === null) {
      listOfTrails = <h1 className='text-center'>There are no Trails to manage at this time</h1>
    } else if (trails.length > 0 ) {
      listOfTrails = trails.map(trail => (
        // <Lake key={lake._id} lake={lake}></Lake>
        
        <Trail key key={trail._id} peak={trail}></Trail>
      ))
    } else {
        listOfTrails = <h1>There are no Trails</h1>
    }
    console.log(this.props.trail.trails);


    return (
      <div>
            <div className='container mt-5 mb-5'>

            <h1> Manage your trails here</h1>
            {listOfTrails}
            </div>
        
      </div>
    )
  }
}

ManageTrails.propTypes = {
    readTrails: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
trail: state.trail
})

export default connect(mapStateToProps, {readTrails})(withRouter(ManageTrails))
