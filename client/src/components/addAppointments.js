import React, {Component} from 'react';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet
import './addAppointments.css';
//import nav component from react bootstrap
import Nav from 'react-bootstrap/Nav';
//import button component from react bootstrap
import Button from 'react-bootstrap/Button';
//import form component from react bootstrap
import Form from 'react-bootstrap/Form';
import axios from 'axios';
//import cookies
import cookies from 'js-cookie';

class Add extends Component{
    constructor(props){
        super(props)
        //the states used for this component
        this.state={
            name:'',
            reason:'',
            duration:'',
            date:'',
            day:'',
            _id:[],
            cookie:''
        }

        this.onChange = this.onChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    onChange=(e)=>{//the user adds values to the input fields
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAdd = () => {
        const {name, reason, duration, date, day, _id} = this.state//the values from state

        axios.post('/appointments/add', {name, reason, duration, date, day, _id})//post request to add appointments
        .then((res) => alert(res.data.Message))
        .catch((err) => alert('Sorry, an error occured when adding your new appointment'))
    }

    componentDidMount = async() => {//fetch data from storage when the component mounts and setting the states of the user id and cookie
        const user = JSON.parse(window.localStorage.getItem('user'))
        const token = cookies.get('token')

        await this.setState({
            _id: user
        })

        await this.setState({
            cookie: token
        })
    }

    render(){
        //display table that adds appointments
        return(
           <div className="content-wra">
               <Nav className="AddNav">
               <Nav.Link href="/appointments" className="AddNavLink"><b>Appointment Book</b></Nav.Link>
               </Nav>

                <h1 className="AddHeading">Add your appointments below:</h1>

               <Form className="AddForm">
               <Form.Group>
               <Form.Label className="AddLabel"><b>Name of patient</b></Form.Label>
               <Form.Control type="text" name="name" onChange={this.onChange} placeholder="eg. Leo Willis"/>
               </Form.Group>

               <Form.Group>
               <Form.Label className="AddLabel"><b>Reason for appointment</b></Form.Label>
               <Form.Control type="text" name="reason" onChange={this.onChange} placeholder="eg. Flu symptoms"/>
               </Form.Group>

               <Form.Group>
               <Form.Label className="AddLabel"><b>Length of appointment</b></Form.Label>
               <Form.Control type="text" name="duration" onChange={this.onChange} placeholder="eg. 10:30 a.m. - 11:30 a.m."/>
               </Form.Group>

               <Form.Group>
               <Form.Label className="AddLabel"><b>Date of appointment</b></Form.Label>
               <Form.Control type="text" name="date" onChange={this.onChange} placeholder="eg. 20 Dec 2021"/>
               </Form.Group>

               <Form.Group>
               <Form.Label className="AddLabel"><b>Day of appointment</b></Form.Label>
               <Form.Control type="text" name="day" onChange={this.onChange} placeholder="eg. Monday"/>
               </Form.Group>
               <Button variant="danger" onClick={this.onAdd} className="AddButton">Add Appointment</Button>
               </Form>
           </div> 
        )
    }
}

//export this code to make it available outside this module
export default Add;