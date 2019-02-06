import React, { Component } from 'react';
import highway from '../../images/highway1.JPG';
import lake from '../../images/teacupLake.JPG';
import river from '../../images/provoRiver.JPG';
import peak from '../../images/haydenPeak.JPG';
import attraction from '../../images/attraction1.JPG';
import trail from '../../images/provoRiverTrail.JPG';

 class PictureNavigation extends Component {
  render() {
    return (
      <div className='container mt-5 mb-5'>

        <h1 className='text-center'>Mirror Lake Highway Attractions</h1>

          <div className='row mb-5 mt-5'>

            <div className='col-6'>
           
          <div className="card card-image" style={{backgroundImage: `url(${lake})`}}>

          
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                  Odit sed qui, dolorum!.</p>
                <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
              </div>
            </div>

          </div> 

          </div>

          <div className='col-6'>

          <div className="card card-image" style={{backgroundImage: `url(${river})`}}>

          
        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
            <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
          </div>
        </div>

        </div> 

          
          
          </div>
          
          </div>

          <div className='row mt-5 mb-5 '>

            <div className='col-6'>
           
          <div className="card card-image" style={{backgroundImage: `url(${peak})`}}>

          
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                  Odit sed qui, dolorum!.</p>
                <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
              </div>
            </div>

          </div> 

          </div>

          <div className='col-6'>

          <div className="card card-image" style={{backgroundImage: `url(${attraction})`}}>

          
        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
            <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
          </div>
        </div>

        </div> 

          
          
          </div>
          
          </div>

          
          <div className='row mt-5 mb-5'>

            <div className='col-6'>
           
          <div className="card card-image" style={{backgroundImage: `url(${highway})`}}>

          
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                  Odit sed qui, dolorum!.</p>
                <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
              </div>
            </div>

          </div> 

          </div>

          <div className='col-6'>

          <div className="card card-image" style={{backgroundImage: `url(${trail})`}}>

          
        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
            <h3 className="card-title pt-2"><strong>This is card title</strong></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
          </div>
        </div>

        </div> 

          
          
          </div>
          
          </div>
      </div>
    )
  }
}

export default PictureNavigation
