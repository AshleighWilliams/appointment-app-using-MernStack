import React, {Component} from 'react';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet 
import './home.css';
//import home image from images
import home from '../images/home.jpg';
//import button component from react bootstrap
import Button from 'react-bootstrap/Button';

class Home extends Component{
    constructor(props){
        super(props)
    }
    //display the home page component
    render() {
        return(
            <div className="container"> 
                <div className="item">
                    <h1 className="Heading">{`Doctor's Appointments`}</h1>
                    <img src={home} alt="homeimage"/>
                </div>

                <div className="items">
                   <a href="/login"><Button className="HomeLoginButton"><b>Sign in</b></Button></a>{/*create the sign in button*/}
                   <h3 className="HomeHeading">{`Register or Sign in to view your Appointments`}</h3>
                   <br/>
                   <a href="/register"><Button className="HomeButton"><b>Register</b></Button></a>{/*create the register button*/}
                </div>
           </div> 
        )
    }
}

//export this code to make it available outside this module
export default Home;