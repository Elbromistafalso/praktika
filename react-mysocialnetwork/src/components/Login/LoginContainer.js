import axios from "axios";
import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import LoginComponent from "./LoginComponent";


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      areCredentialsIncorrect: false,
      emptyFields: false
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
      
  };

  resetState = () => {
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.setState({ incorrectCredentials: false });
    this.setState({ emptyFields: false});
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.resetState();
    let usernameFromUser = e.target.username.value;
    let passwordFromUser = e.target.password.value;


    if (usernameFromUser.trim().length !== 0 && passwordFromUser.trim().length !== 0) {
      
        let newUser = {
          
          userName: usernameFromUser,
          password: passwordFromUser
      }

      axios
        .post("http://localhost:8080/user/login", newUser)
        .then( (res) => {
          
         let data = res;
          
          if(data.status === 200 ){
              this.props.history.push({pathname:"/loggedIn", state: {userName: usernameFromUser}});
          }
      }

    )
        .catch((e) => {
          if (e.response.status === 401) {
            this.setState({ areCredentialsIncorrect: true });
          } else {
            console.log(e);
          }
        });
    } else{
        this.setState({emptyFields: true});
    }
  };


  render() {
    return (
          <LoginComponent
            history={this.props.history}
            username={this.state.username}
            password={this.state.password}
            areCredentialsIncorrect={this.state.areCredentialsIncorrect}
            emptyFields={this.state.emptyFields}
            onSubmit={this.handleSubmit}
            onUsernameChange={this.handleChange}
            onPasswordChange={this.handleChange}
          />
    );
  }
}

export default withRouter(LoginContainer);
