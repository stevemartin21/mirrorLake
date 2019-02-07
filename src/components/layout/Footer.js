import React, { Component } from 'react';
import { Link } from 'react-router-dom';


 class Footer extends Component {
  render() {
    return (
      <div>
          
<footer className="page-footer font-small elegant-color pt-4">

    
    <div className="container text-center text-md-left">

      

     
      <div className="row">

        
        <div className="col-md-4 mx-auto">

         
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Mirror Lake Highway</h5>
          <p>The Mirror Lake Highway is one of the Premier Summer Destinations for people along 
            the Wasatch Front with immense beauty, history, and amazing recreational opportunities. 
            Please join and share with us this amazing area and experience its majesty.
          </p>

        </div>
        

        <hr className="clearfix w-100 d-md-none" />

        
        <div className="col-md-2 mx-auto">

         
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

          <ul className="list-unstyled">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login' >Login</Link>
            </li>
            <li>
              <Link to='/map'>Map</Link>
            </li>
          </ul>

        </div>
        

        <hr className="clearfix w-100 d-md-none" />

        
        <div className="col-md-2 mx-auto">

          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

          <ul className="list-unstyled">
            <li>
              <Link to='/dashboard' >Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Link 2</Link>
            </li>
            <li>
              <Link to='/dashboard'>Link 3</Link>
            </li>
            <li>
              <Link to='/dashboard'>Link 4</Link>
            </li>
          </ul>

        </div>
        

        <hr className="clearfix w-100 d-md-none" />

        
        <div className="col-md-2 mx-auto">

          
          <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

          <ul className="list-unstyled">
            <li>
              <Link to='/dashboard' >Link 1</Link>
            </li>
            <li>
              <Link to='/dashboard' >Link 2</Link>
            </li>
            <li>
              <Link to='/dashboard'>Link 3</Link>
            </li>
            <li>
              <Link to='/dashboard' >Link 4</Link>
            </li>
          </ul>

        </div>
        

      </div>
     

    </div>
    

    <hr />

  
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
        <Link to='/dashboard' className="btn btn-danger btn-rounded">Sign up!</Link>
      </li>
    </ul>
  

    <hr />

    
    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <Link to='/dashboard' className="btn-floating btn-fb mx-1">
          <i className="fab fa-facebook-f"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to='/dashboard' className="btn-floating btn-tw mx-1">
          <i className="fab fa-twitter"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to='/dashboard' className="btn-floating btn-gplus mx-1">
          <i className="fab fa-google-plus-g"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to='/dashboard' className="btn-floating btn-li mx-1">
          <i className="fab fa-linkedin-in"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link to='/dashboard' className="btn-floating btn-dribbble mx-1">
          <i className="fab fa-dribbble"> </i>
        </Link>
      </li>
    </ul>
    

    
    <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <Link to='/dashboard' > MDBootstrap.com</Link>
    </div>
    

</footer>

        
      </div>
    )
  }
}

export default Footer
