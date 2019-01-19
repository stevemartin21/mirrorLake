import React, { Component } from 'react'

 class Login extends Component {
     constructor() {
         super()
         this.state= {
             email: '',
             password: '',
             errors: {}
         }
     }

     onChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     onSubmit = (e) => {
         const newUser = {
             email: this.state.email,
             password: this.state.password
         }
     }
  render() {
    return (
      <div className='container mt-5'>
          <div className='card'>

                <div className='card-header'>Login</div>

                <div className='card-body'>

                    <form onSubmit={this.onSubmit}>
                
                    <div className='md-form'>

                        <input 
                            type='text'
                            placeholder='Email'
                            value={this.state.email}
                            name='email'
                            className='form-control'
                            onChange={this.onChange}
                        
                        
                        />
                    </div>

                    <div className='md-form'>

                        <input 
                            type='text'
                            placeholder='Password'
                            value={this.state.email}
                            name='password'
                            className='form-control'
                            onChange={this.onChange}
                        
                        
                        />
                    </div>

                    <input 

                        type='submit'
                        className='btn btn-success'
                        value='Submit'
                    
                    
                    />

                    </form>
                
                
                
                
                
                </div>
          
          
          
          
          </div>
        
      </div>
    )
  }
}

export default Login
