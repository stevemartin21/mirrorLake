import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JumboTron from '../webSiteComponents/Jumbotron';
import PictureNavigation from '../webSiteComponents/PictureNavigation';
import Features from '../webSiteComponents/Features';


 class Home extends Component {
  render() {
    return (
      <div>
        <JumboTron />

        <PictureNavigation  />

        <Features />
      </div>
    )
  }
}

export default Home
