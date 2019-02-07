import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {readCampgrounds} from '../../actions/readActions';
import PublicCampgroundItem from '../../components/appComponents/campgrounds/PublicCampgroundItem';

 class PublicCampgrounds extends Component {

    componentDidMount() {
        this.props.readCampgrounds();
    }
  render() {
    const {campgrounds} = this.props.campground;
    let listOfCampgrounds;

    if(campgrounds === null) {
      listOfCampgrounds = <h1 className='text-center'>There are no Campgrounds to manage at this time</h1>
    } else if (campgrounds.length > 0 ) {
      listOfCampgrounds = campgrounds.map(campground => (
        // <Lake key={lake._id} lake={lake}></Lake>
        
        <PublicCampgroundItem key key={campground._id} campground={campground}></PublicCampgroundItem>
      ))
    } else {
        listOfCampgrounds = <h1>There are no Campgrounds</h1>
    }
    console.log(this.props.campground.campgrounds);


    return (
        <div>
        <div className='container mt-5 mb-5'>

        <h1 className='text-center'> Mirror Lake Highway Campgrounds</h1>
        {listOfCampgrounds}
        </div>
    
  </div>
    )
  }
}

PublicCampgrounds.propTypes = {
    readCampgrounds: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    campground: state.campground
})

export default connect(mapStateToProps, {readCampgrounds})(PublicCampgrounds)
