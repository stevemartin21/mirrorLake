import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {readRivers} from '../../actions/readActions';
import River from '../../components/appComponents/rivers/River';

 class PublicRivers extends Component {
    componentDidMount() {
        this.props.readRivers();
    }
  render() {

    const {rivers} = this.props.river;
    let listOfRivers;

    if(rivers === null) {
      listOfRivers = <h1 className='text-center'>There are no Campgrounds to manage at this time</h1>
    } else if (rivers.length > 0 ) {
      listOfRivers = rivers.map(river => (
        // <Lake key={lake._id} lake={lake}></Lake>
        
        <River key key={river._id} peak={river}></River>
      ))
    } else {
        listOfRivers = <h1>There are no Rivers</h1>
    }
    console.log(this.props.river.rivers);
    return (
        <div>
            <div className='container mt-5 mb-5'>

            <h1> Manage your rivers here</h1>
            {listOfRivers}
            </div>
        
      </div>
    )
  }
}

PublicRivers.propTypes = {
    readRivers: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    
    errors: state.errors,
    river: state.river
})

export default connect(mapStateToProps, {readRivers})(PublicRivers)

