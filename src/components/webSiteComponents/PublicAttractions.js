import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

import {readAttractions} from '../../actions/readActions';
import PublicAttractionItem from '../../components/appComponents/attractions/PublicAttractionItem';

 class PublicAttractions extends Component {

    componentDidMount() {
        this.props.readAttractions();
    }
  render() {
    const {attractions} = this.props.attraction;
    let listOfAttractions;

    if(attractions === null) {
      listOfAttractions = <h1 className='text-center'>There are no Attractions </h1>
    } else if (attractions.length > 0 ) {
      listOfAttractions = attractions.map(attraction => (
        // <Lake key={lake._id} lake={lake}></Lake>
        
        <PublicAttractionItem key key={attraction._id} attraction={attraction}></PublicAttractionItem>
      ))
    } else {
        listOfAttractions = <h1>There are no Attractions</h1>
    }
    console.log(this.props.attraction.Attractions);
    return (
        <div>
         <div className='container mt-5 mb-5'>

            <h1 className='text-center'> Mirror Lake Highway Special Attractions</h1>
            {listOfAttractions}
            </div>
      </div>
    )
  }
}

PublicAttractions.propTypes = {
    readAttractions: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
   
    errors: state.errors,
    attraction: state.attraction
})

export default connect(mapStateToProps, {readAttractions})(PublicAttractions)
