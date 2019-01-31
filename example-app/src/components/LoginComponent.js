import React from 'react';
import '../css/bootstrap.min.css'
import '../css/logincss.css'

class LoginComponent extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="signup">
                   <h2>Create Account</h2>
                   <form>
                       <div className="form-group" id="signupform">
                        <label>First Name</label>
                        <input type="text" className="form-control" ref = 'firstName'></input>
                        <label>Last Name</label>
                        <input type="text" className="form-control" ref = 'lastName'></input>
                        <label>Email</label>
                        <input type="email" className="form-control" ref = 'email'></input>
                        <label>Password</label>
                        <input type="password" className="form-control" ref = 'password'></input>
                        <button className="btn btn-primary" onClick = {this.registerUser}>Signup</button>
                       </div>

                    </form>
                
                
                </div>
                <div className="login">
                   <h2>Login</h2>
                   <form>
                       <div className="form-group" id="signupform">
                        <label>Email</label>
                        <input type="email" className="form-control"></input>
                        <label>Password</label>
                        <input type="password" className="form-control"></input>
                        <button className="btn btn-primary">Login</button>
                        

                       </div>

                    </form>
                
                
                </div>

            </div>
        );
    }
    registerUser = (evt)=>{
        evt.preventDefault();
        console.log("button is clicked");
        console.log(this.refs.firstName.value);
    }

}
export default LoginComponent;

