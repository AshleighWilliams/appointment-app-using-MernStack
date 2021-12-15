import React, {Component} from 'react';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet
import './appointments.css';
//import button component from react bootstrap 
import Button from 'react-bootstrap/Button';
//import table component from react bootstrap 
import Table from 'react-bootstrap/Table';
//import nav component from react bootstrap 
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
//import cookies
import cookies from 'js-cookie';

class Appointments extends Component{
    constructor(props){
        super(props)

        this.state={
            user:[],
            cookie:'',
            appointments:[]
        }
    }

    componentDidMount = async () => {
        const user = JSON.parse(window.localStorage.getItem('user'))//Fetch user object and cookie from storage
        const token = cookies.get('token')

        await this.setState({
            user: user
        })

        await this.setState({
            cookie: token
        })

        await axios({//fetch appointments from the database and set the appointments state
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
        const appointments = this.state.appointments//appointments array in state
        //make the delete request when the delete button is clicked
        const onDelete = (_id) => {
            axios.delete(`/appointments/${_id}`)//the id of the appointment in params 
            .then((res)=>alert(res.data))
            .catch((err)=>alert('Sorry, appointment could not be deleted'))

            window.location.reload();
        }
        //map through appointments and display them in a table
        const displayAppointments = appointments.map((appointment) => {
            return <tr>
                <td>{appointment.name}</td>
                <td>{appointment.reason}</td>
                <td>{appointment.duration}</td>
                <td>{appointment.date}</td>
                <td>{appointment.day}</td>
                <td><Button variant="danger" onClick={onDelete.bind(this, appointment._id)} className="DeleteButton"><b>X</b></Button></td>
                </tr>
        })

        //display apointments table
        return(
           <div className="cont">
                <h1 className="AppointmentsHeading">Your Appointment Book:</h1>
                <br/>
                
                <Table className="AppointmentsTable">
                <thead className="AppointmentsTableHead">
                <tr>
                <th>Name of patient</th>
                <th>Reason</th>
                <th>Length</th>
                <th>Date of appointment</th>
                <th>Day of appointment</th>
                <th className="TableRemove">Delete</th>
                <th> <Nav className="AppointmentsNav"><Nav.Link href="/add appointments" className="AppointmentsNavLink"><b>Add New Appointment</b></Nav.Link></Nav></th>
                <th><h5 className="AppointmentsSubheading">Click below to add or update an appointment:<Nav><Nav.Link href="/update" className="AppointmentsSubLink">Update Appointment</Nav.Link></Nav></h5></th>
                </tr>
                </thead>
                <tbody>
                {displayAppointments}
                </tbody>
                </Table>
           </div> 
        )
    }
}

//export this code to make it available outside this module
export default Appointments;