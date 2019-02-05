import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

import {readPeaks} from '../../actions/readActions';
import Peak from '../../components/appComponents/peaks/Peak';

 class PublicPeaks extends Component {
  render() {
    const {peaks} = this.props.peak;
    let listOfPeaks;

    if(peaks === null) {
      listOfPeaks = <h1 className='text-center'>There are no Peaks to manage at this time</h1>
    } else if (peaks.length > 0 ) {
      listOfPeaks = peaks.map(peak => (
        // <Lake key={lake._id} lake={lake}></Lake>
        
        <Peak key key={peak._id} peak={peak}></Peak>
      ))
    } else {
        listOfPeaks = <h1>There are no Peaks</h1>
    }
    console.log(this.props.peak.peaks);

    return (
        <div>
        <div className='container mt-5 mb-5'>

        <h1> Manage your peaks here</h1>
        {listOfPeaks}
        </div>
    
  </div>
    )
  }
}

PublicPeaks.propTypes = {
    readPeaks: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    peak: state.peak
})

export default connect(mapStateToProps, {readPeaks})(PublicPeaks)
