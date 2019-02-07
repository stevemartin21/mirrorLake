import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {readRivers} from '../../actions/readActions';
import PublicRiverItem from '../../components/appComponents/rivers/PublicRiverItem';

 class PublicRivers extends Component {
    componentDidMount() {
        this.props.readRivers();
    }
  render() {

    const {rivers} = this.props.river;
    let listOfRivers;

    if(rivers === null) {
      listOfRivers = <h1 className='text-center'>There are no Rivers to manage at this time</h1>
    } else if (rivers.length > 0 ) {
      listOfRivers = rivers.map(river => (
        // <Lake key={lake._id} lake={lake}></Lake>
        
        <PublicRiverItem key key={river._id} river={river}></PublicRiverItem>
      ))
    } else {
        listOfRivers = <h1>There are no Rivers</h1>
    }
    console.log(this.props.river.rivers);
    return (
        <div>
            <div className='container mt-5 mb-5'>

            <h1 className='text-center'> Mirror Lake Area Rivers</h1>
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

