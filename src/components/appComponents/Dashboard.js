import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='container pt-5 pb-5'>
        <div className='row'>
            <div className='col-6'>
            <div className='card elegant-color text-white'>
                <div className='card-header text-center'>
                  See Lakes
                </div>
                <div className='card-body'>
                    <div className='mt-2'>
                        <Link className='btn btn-success btn-block' to='/dashboard'  >Click</Link>
                    </div>
                </div>
              </div>
              </div>

              <div className='col-6'>
            <div className='card primary-color text-white'>
                <div className='card-header text-center'>
                  See Trails
                </div>
                <div className='card-body'>
                    <div className='mt-2'>
                        <Link className='btn btn-success btn-block' to='/dashboard'  >Click</Link>
                    </div>
                </div>
              </div>
              </div>
              </div>

              <div className='row mt-5 mb-5'>
            <div className='col-6'>
            <div className='card default-color text-white'>
                <div className='card-header text-center'>
                  See Lakes
                </div>
                <div className='card-body'>
                    <div className='mt-2'>
                        <Link className='btn btn-success btn-block' to='/dashboard'  >Click</Link>
                    </div>
                </div>
              </div>
              </div>

              <div className='col-6'>
            <div className='card stylish-color text-white'>
                <div className='card-header text-center'>
                  See Trails
                </div>
                <div className='card-body'>
                    <div className='mt-2'>
                        <Link className='btn btn-success btn-block' to='/dashboard'  >Click</Link>
                    </div>
                </div>
              </div>
              </div>
              </div>
      </div>
    )
  }
}
