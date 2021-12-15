import React, {Component} from 'react';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet
import './updatePage.css';
//import nav component from react bootstrap
import Nav from 'react-bootstrap/Nav';
//import button component from react bootstrap
import Button from 'react-bootstrap/Button';
//import form component from react bootstrap
import Form from 'react-bootstrap/Form';
//import table component from react bootstrap
import Table from 'react-bootstrap/Table';
//import cookies
import cookies from 'js-cookie';
import axios from 'axios';

class Update extends Component{
    constructor(props){
        super(props)

        this.state={
            search: '',
            user: [],
            cookie: '',
            appointments: [],
            name: '',
            reason: '',
            duration: '',
            date: '',
            day: '',
            toBeChanged: '',
            newValue: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }

    onChange = (e) => {//set the states when a user enters info in the input fields
       this.setState({
        [e.target.name]: e.target.value
       })
    }

    onUpdate = async() => {//send a request to update an appointment
        const {name, reason, duration, date, day, toBeChanged, newValue} = this.state //call the properties in state
        //make the update request using the put method
        axios.put('/appointments/update', {name, reason, duration, date, day, toBeChanged, newValue})
        .then((res) => alert(res.data.Message))
        .catch((err) => console.log(err))

        await window.location.reload()
    }

    componentDidMount = async () => {
        const user = JSON.parse(window.localStorage.getItem('user'))//fetch user object and cookie from storage
        const token = cookies.get('token')

        await this.setState({//set the states of user and cookie
            user: user
        })

        await this.setState({
            cookie: token
        })

        await axios({//fetch appointments from the database and setting the appointments state
            method: 'GET',
            url: '/appointments/fetch',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response)
            this.setState({
                appointments: response.data
            })
        })
        .catch((err)=>console.log(err))
    }

    render(){
        const {appointments} = this.state

        const displaySearchResult = appointments.map((appointment) => {//use the appointments array and the search in state to search for a specific patient
            const {search} = this.state

            if(appointment.name === search){//if the name of a patient matches the name in the search state it displays a table with the patients information
                return <Table className="UpdateTable">
                <thead>
                <th>Name</th>
                <th>Reason</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Day</th>
                </thead>
                <tbody>
                <tr>
                    <td>{appointment.name}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.duration}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.day}</td>
                </tr>
                </tbody>
                </Table>
            }
        })

        return(
           <div className="wrapper">
               <Nav className="UpdateNav">
               <Nav.Link href="/appointments" className="UpdateNavLink"><b>Back To Appointment Book</b></Nav.Link>
               </Nav>

                <h3 className="UpdateHeading">Add all the appointment's original details in the form to the left, and change any aspect of the appointment, in the form to the right (view changes in your appointments)</h3>
                <h5 className="SearchHeading">First search for the patient by name to get all details of their original appointment</h5>
                
                <Form className="SearchForm">
                <Form.Control type="text" name="search" onChange={this.onChange}  placeholder="Leo Willis"/>
                </Form>

                {displaySearchResult}{/*display the search result*/}
                <br/>

                <div className="leftSide">
                    <Form className="UpdateForm">
                        <Form.Group>
                        <Form.Label className="UpdateLabel"><b>Name</b></Form.Label>
                        <Form.Control type="text" name="name" onChange={this.onChange} placeholder="eg. Leo Willis"/>
                        </Form.Group>
               
                        <Form.Group>
                        <Form.Label className="UpdateLabel"><b>Reason</b></Form.Label>
                        <Form.Control type="text" name="reason" onChange={this.onChange} placeholder="eg. Flu symptoms"/>
                        </Form.Group>
               
                        <Form.Group>
                        <Form.Label className="UpdateLabel"><b>Duration</b></Form.Label>
                        <Form.Control type="text" name="duration" onChange={this.onChange} placeholder="eg. 10:30 a.m. - 11:30 a.m."/>
                        </Form.Group>
               
                        <Form.Group>
                        <Form.Label className="UpdateLabel"><b>Date</b></Form.Label>
                        <Form.Control type="text" name="date" onChange={this.onChange} placeholder="eg. 20 Dec 2020"/>
                        </Form.Group>
               
                        <Form.Group>
                        <Form.Label className="UpdateLabel"><b>Day</b></Form.Label>
                        <Form.Control type="text" name="day" onChange={this.onChange} placeholder="eg. Monday"/>
                        </Form.Group>
                    </Form>
               </div>

                <div className="rightSide">
                    <Form className="SecUpdateForm">
                        <Form.Group>
                        <Form.Label className="SecUpdateLabel"><b>Aspect to be changed</b></Form.Label>
                        <Form.Control type="text" name="toBeChanged" onChange={this.onChange} placeholder="e.g. date (please use lowercase)"/>
                        </Form.Group>
               
                        <Form.Group>
                        <Form.Label className="SecUpdateLabel"><b>New value</b></Form.Label>
                        <Form.Control type="text" name="newValue" onChange={this.onChange} placeholder="e.g. 11:30 a.m. - 12:30 a.m."/>
                        </Form.Group>
                        <Button variant="danger" onClick={this.onUpdate} className="UpdateButton">Update Appointment</Button>
                    </Form>
               </div> 
           </div> 
        )
    }
}

//export the code to make it available outside this module
export default Update;