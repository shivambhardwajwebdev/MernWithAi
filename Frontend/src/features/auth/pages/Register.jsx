import React from 'react'
 import "../auth.form.scss"
function Register() {
   const handleSubmit=(e)=>{
        e.preventDefault()
    }
   return (
     <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"  id='username' placeholder='Enter Username'/>
                    
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"  id='email' placeholder='Enter email address'/>
                    
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  id='password' placeholder='Enter Password'/>
                </div>
                <button className="button primary-button">Register</button>
            </form>
        </div>
     </main>
   )
 }

export default Register