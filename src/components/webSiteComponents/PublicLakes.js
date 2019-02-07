import React, { Component } from 'react';
import { readLakes } from '../../actions/readActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PublicLakeItem from '../appComponents/PublicLakeItem';

class PublicLakes extends Component {

    componentDidMount() {
        this.props.readLakes()
      }

  render() {
      const {lakes} = this.props.lake;
      let listOfLakes;

      if(lakes === null) {
        listOfLakes = <h1 className='text-center'>There are no lakes to manage at this time</h1>
      } else if (lakes.length > 0 ) {
        listOfLakes = lakes.map(lake => (
          // <Lake key={lake._id} lake={lake}></Lake>
          
          <PublicLakeItem key key={lake._id} lake={lake}></PublicLakeItem>
        ))
      } else {
          listOfLakes = <h1>There are no lakes</h1>
      }
      console.log(this.props.lake.lakes);
    return (
        <div className='container mt-5 mb-5'>

        <h1 className='text-center'> Lakes</h1>
          {listOfLakes}
      </div>
    )
  }
}

PublicLakes.propTypes = {
    readLakes: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    lake: state.lake
})

export default connect(mapStateToProps, {readLakes})(PublicLakes)
