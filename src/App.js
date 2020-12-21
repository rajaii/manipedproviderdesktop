import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import HomePage from './components/HomePage.js';
import Register from './components/AuthApplyComponents/Register.js';
import SecondSignupPage from './components/AuthApplyComponents/SecondSignupPage.js';
import Login from './components/AuthApplyComponents/Login.js';
import ForgotUsernamePw from './components/AuthApplyComponents/ForgotUsernamePw.js';
import ResetPassword from './components/AuthApplyComponents/ResetPassword.js';
import NotVerified from './components/AuthApplyComponents/NotVerified.js';
import PreDash from './components/AuthApplyComponents/PreDash.js';
// import DashBoard from './components/Dashboard/DashBoard.js';
// import DashHeader from './components/Dashboard/DashHeader.js';
// import PrivateRoute from './components/PrivateRoute.js';
// import CardSetupForm from './components/Payments/CardSetupForm.js';
import './App.css';

class App extends React.Component {
 
  
 render() {
   
   return (
     <div className='body'>
        
            <Nav />
            <Route exact path='/' render={(props) => <HomePage {...props} />} ></Route>
            <Route exact path='/register' render={(props) => <Register {...props} />}></Route>
            <Route exact path='/secondsignuppage' render={(props) => <SecondSignupPage {...props} />}></Route>
            <Route exact path='/login' render={(props) => <Login {...props} />}></Route>
            <Route exact path='/forgotusernamepw' render={(props) => <ForgotUsernamePw {...props} />}></Route>
            <Route exact path='/resetpassword' render={(props) => <ResetPassword {...props} />}></Route>
            <Route exact path='/notverified' render={(props) => <NotVerified {...props} />}></Route>
            <Route exact path='/predash' render={(props) => <PreDash {...props} />}></Route>
            {/* <PrivateRoute exact path='/dashboard' component={DashBoard} ></PrivateRoute>
            <PrivateRoute exact path='/cardsetupform' component={CardSetupForm}></PrivateRoute> */}
            
      
      </div>
   )
 }

      
 
}

export default App;