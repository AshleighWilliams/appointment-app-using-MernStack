//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import external stylesheet
import './App.css';
//import home from components
import Home from './components/home';
//import register from components
import Register from './components/register';
//import login from components
import Login from './components/login';
//import add appointments from components
import Add from './components/addAppointments';
//import appointments from components
import Appointments from './components/appointments';
//import update appointments from coomponents
import Update from './components/updatePage';
//import browser router and route
import {BrowserRouter, Route} from 'react-router-dom';

//display all of the components in correct paths using browser router and route
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route path="/" exact={true} component={Home}/>
     <Route path="/register" component={Register}/>
     <Route path="/login" component={Login}/>
     <Route path="/add appointments" component={Add}/>
     <Route path="/appointments" component={Appointments}/>
     <Route path="/update" component={Update}/>
     </BrowserRouter>
    </div>
  );
}

//export the code to be available outside this module
export default App;