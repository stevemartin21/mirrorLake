import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {readTrails} from '../../actions/readActions';
import PublicTrailItem from '../appComponents/trails/PublicTrailItem';

class PublicTrails extends Component {
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
        
        <PublicTrailItem  key={trail._id} trail={trail}></PublicTrailItem>
      ))
    } else {
        listOfTrails = <h1>There are no Trails</h1>
    }
    console.log(this.props.trail.trails);




    return (
        <div>
        <div className='container mt-5 mb-5'>

        <h1> Mirror Lake Highway Area Trails</h1>
        {listOfTrails}
        </div>
    
  </div>
    )
  }
}

PublicTrails.propTypes = {
    readTrails: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors,
trail: state.trail
})

export default connect(mapStateToProps, {readTrails})(PublicTrails)
