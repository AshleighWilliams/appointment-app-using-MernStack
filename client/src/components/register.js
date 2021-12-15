import React, {Component} from 'react';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet
import './register.css';
//import button component from react bootstrap
import Button from 'react-bootstrap/Button';
//import form component from react bootstrap
import Form from 'react-bootstrap/Form';
import axios from 'axios';
//import with router 
import {withRouter} from 'react-router-dom';

class Register extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onRegister = this.onRegister.bind(this)
    }

    onChange = (e) => {//set the state of the email and password when the user inputs values 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onRegister = () => {
        const {name, email, password} = this.state

        axios.post('/auth/register', {name, email, password})//send a request to register the user by using the name, email and password the user inputs in state
        .then((res) => (alert(res.data.Message), 
            this.props.history.push('/login')))//redirect the user to the sign in page
        .catch((err) => alert('Registration unsuccessful. Please enter the correct corresponding information.'))
    }

    render(){
        //display the register form
        return(
           <div className="content-wrapper">
                <h1 className="RegisterHeading">Register below to get started:</h1>
                <Form className="RegisterForm">
                <Form.Group>
                <Form.Label className="RegisterLabel"><b>Name</b></Form.Label>
                <Form.Control type="text" onChange={this.onChange} name="name" placeholder="eg. Ashleigh Williams"/>
                </Form.Group>

               <Form.Group>
               <Form.Label className="RegisterLabel"><b>E-mail Address</b></Form.Label>
               <Form.Control type="email" onChange={this.onChange} name="email" placeholder="eg. ashleighwilliams@gmail.com"/>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
               <Form.Label className="RegisterLabel"><b>Password</b></Form.Label>
               <Form.Control type="password" onChange={this.onChange} name="password" placeholder="eg. ash123?"/>
               </Form.Group>
               <Button variant="primary" onClick={this.onRegister} className="RegisterButton">Register</Button>
               </Form>
           </div> 
        )
    }
}

//export the code with router to make it available outside this module
export default withRouter(Register);