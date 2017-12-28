import React, { Component } from 'react';
class Login extends Component {

    constructor(){
        super();
        this.state = {errorMessage: ''}
        this.authenticate = this.authenticate.bind(this);
    }

    authenticate(){
        console.log(this.email.value, this.pwd.value);
        var obj = {email: this.email.value, pwd: this.pwd.value}
        fetch('http://localhost:3000/auth', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(obj)

        }).then((res) => res.json())
        .then((data)=> {
            console.log(data)
            if(data.auth){
                //Next Page - route to profile page
                console.log(this.props)
                this.props.history.push("/profile")
            }
            else{
                //Display an error message
                this.setState({errorMessage: "Invalid user/password!!"})
            }
        })

    }
   
    render() {
        return (
        <div class="container">
            <h2 class="form-signin-heading">Please sign in</h2>
            <strong>{this.state.errorMessage}</strong>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" ref={(email)=>this.email = email} id="inputEmail" class="form-control" placeholder="Email address" required="true" autoFocus="true"/>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" ref={(pwd)=>this.pwd = pwd} id="inputPassword" class="form-control" placeholder="Password" required/>
            <button class="btn btn-lg btn-primary btn-block" onClick={this.authenticate}>Sign in</button>
        </div>
        ) 
    }
}

export default Login;