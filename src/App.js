import React, { Component } from 'react';
import {Provider} from 'react-redux';
// import logo from './logo.svg';
// import './App.css';
import store from './Store.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderSignout from './header/header-signout';
import HeaderSignin from "./header/header-signin";
import Register from './signup/register';
import Login from './signin/login';
import Profile from './profile/profile';
import AddProject from './project/add_project';
import Home from './home/home';
import ProjectDetail from "./project/project_details";
import Dashboard from "./dashboard/dashboard";
// import Example from './header/header-signin.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }
  render() {
    // let header = null;
    // if (this.state.user) {
    //   header = null;
    // } else {
    //   header = <Header_signout />;
    // }
    return (
      <Provider store={store}>
      <div>
      <HeaderSignout />
      <HeaderSignin />
      
        <Router>
          <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/user/register/" component={Register} />
            <Route exact path="/user/login/" component={Login} />
            <Route exact path="/user/profile/" component={Profile} />
            <Route exact path="/project/add/" component={AddProject} />
            <Route exact path="/project/detail/" component={ProjectDetail} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        {/* //   {header} */}
          {/* // */} 
          
          {/* 
          <Route exact path="/user/profile/" component={Profile} />
          <Route exact path="/user/update/" component={UserUpdate} />
          <Route exact path="/project/add/" component={AddProject} />
          <Route exact path="/project/detail/" component={ProjectDetail} />
          <Route exact path="/dashboard" component={DashBoard} /> */}
        </Router> 
      {/* // </Provider> */}
      </div>
      </Provider> 
    );
  }
}

export default App;