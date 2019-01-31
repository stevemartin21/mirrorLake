import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
   MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu,  MDBIcon,  MDBDropdownItem } from "mdbreact";
 import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navigation extends Component {
  onLogOutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {

    

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link"  to='/' >Dashboard
          <span className="sr-only">(current)</span>
        </Link>
      </li>

      <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Manage Items</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem ><Link to='/manageLakes'>Manage Lakes</Link></MDBDropdownItem>
                <MDBDropdownItem ><Link to='/manageRivers'>Manage Rivers</Link></MDBDropdownItem>
                <MDBDropdownItem ><Link to='/manageTrails'>Manage Trails</Link></MDBDropdownItem>
                <MDBDropdownItem ><Link to='/manageCampgrounds'>Manage Campgrounds</Link></MDBDropdownItem>
                <MDBDropdownItem ><Link to='/manageAttractions'>Manage Attractions</Link></MDBDropdownItem>
                <MDBDropdownItem ><Link to='/managePeaks'>Manage Peaks</Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        </MDBNavItem>
      <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Add Items</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem ><Link to='/addLake'>Add Lake</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/addRiver">Add River</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/addAttraction">Add Attraction</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/addCampground">Add Campground</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/addPeak">Add Peak</Link></MDBDropdownItem>
                  <MDBDropdownItem><Link to="/addTrail">Add Trail</Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        </MDBNavItem>

    
    
      <li className="nav-item">
        <a className="nav-link" onClick={this.onLogOutClick.bind(this)}  >Logout</a>
      </li>
    </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link"  to='/' >Home
          <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/attractions' >See Attractions </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/register' >Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/login' >Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/contact'>Contact</Link>
      </li>
    </ul>
    )

     
    return (
      <div>
            
<nav className="navbar navbar-expand-lg navbar-dark elegant-color">

  
  <Link className="navbar-brand text-white" to='/' >Mirror Lake Highway</Link>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="basicExampleNav">

  {isAuthenticated ? authLinks : guestLinks}
   
  </div>
</nav>  
      </div>
    )
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
