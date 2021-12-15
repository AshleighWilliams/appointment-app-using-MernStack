import React, {Component} from 'react';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet
import './login.css';
import Nav from 'react-bootstrap/Nav';
//import button component from react bootstrap
import Button from 'react-bootstrap/Button';
//import form component from react bootstrap
import Form from 'react-bootstrap/Form';
import axios from 'axios';
//import authenticated user from utils
import {authenticateUser} from '../utils/utils';
//import with router 
import {withRouter} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onLogin = this.onLogin.bind(this)
    }

    onChange=(e)=>{//set the states of the email and password when the user inputs values 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin=()=>{
        const {email, password} = this.state

        axios.post('/auth/login', {email, password})//make the login request when the sign in button is clicked
        .then((response)=>authenticateUser(response, () => {
            alert('Successfully signed in! You will be redirected to your appointments shortly.')
            this.props.history.push('/appointments')//redirect the user to the appointment book if the login is successful
        }))
        .catch((err)=>alert('Sorry, your sign in failed. Please check your user information and try again'))
    }

    render(){
        //display the sign in form
        return(
           <div className="content-wrapper">
                <h1 className="LoginHeading">Sign in to view your appointments:</h1>

               <Form className="LoginForm">
               <Form.Group>
               <Form.Label className="LoginLabel"><b>E-mail Address</b></Form.Label>
               <Form.Control type="email" onChange={this.onChange} name="email" placeholder="eg. ashleighwilliams@gmail.com"/>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
               <Form.Label className="LoginLabel"><b>Password</b></Form.Label>
               <Form.Control type="password" onChange={this.onChange} name="password" placeholder="eg. ash123?"/>
               </Form.Group>
               <Button variant="primary" onClick={this.onLogin} className="LoginButton">Sign in</Button>
               </Form> 
           </div> 
        )
    }
}

//export the code with router to make it available outside this module
export default withRouter(Login);