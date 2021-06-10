import axios from "axios";
import React, { Component } from "react";
import RegistrationComponent from "./RegistrationComponent";


class RegistrationContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      secondPassword: "",
      usernameValidation: "",
      passwordValidation: "",
      secondPaasswordValidation: "",
      successfulRegistration: false,
      arePasswordsTheSame: true,
      sufficientPasswordLength: true,
      userRole: "",
    };
  }


    handleChange = (e) => {
        
    const { name, value } = e.target;

    this.setState({ [name]: value });

    if (this.state.usernameValidation !== "" && name === "username") {
      this.setState({ usernameValidation: "" });
    }

    if (this.state.passwordValidation !== "" && name === "password") {
      this.setState({ passwordValidation: "" });
    }
        
    if (this.state.secondPasswordValidation !== "" && name === "secondPassword") {
      this.setState({ secondPasswordValidation: "" });
    }

    if (this.state.areCredentialsIncorrect) {
      this.setState({ areCredentialsIncorrect: false });
    }
  };

  resetState = () => {
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.setState({ secondPassword: "" });
    this.setState({ usernameValidation: "" });
    this.setState({ passwordValidation: "" });
    this.setState({ secondPasswordValidation: "" });
    this.setState({ successfulRegistration: false });
    this.setState({arePasswordsTheSame: true})
    this.setState({sufficientPasswordLength: true})
  };

  handleSubmit = (e) => {
      
    e.preventDefault();
    let usernameFromUser = e.target.username.value;
    let passwordFromUser = e.target.password.value;
    let secondPasswordFromUser = e.target.secondPassword.value;

    this.doValidation(usernameFromUser, passwordFromUser, secondPasswordFromUser);
    this.checkPasswordLength(passwordFromUser);
    this.checkPasswordsEquality(passwordFromUser, secondPasswordFromUser);

    if (usernameFromUser.trim().length !== 0 && passwordFromUser.trim().length !== 0 && secondPasswordFromUser.trim().length !== 0
       && passwordFromUser === secondPasswordFromUser){
        
      let newUser = {
          
          userName: usernameFromUser,
          password: passwordFromUser
      }
    
      axios
        .post(`http://localhost:8080/user/registration`, newUser)
        .then(() => { this.setState({successfulRegistration: true})})
        .catch((e) => {
            console.log(e);
          });
        
        this.resetState();
    }
      
    }
  
  checkPasswordLength = (password) => {
      
      if(password.trim().length < 8){
          this.setState({sufficientPasswordLength : false})
      }
  }  
  
  
  checkPasswordsEquality = (password, secondPassword) => {
      
      if(password !== secondPassword){
          this.setState({arePasswordsTheSame : false})
      }
  }  
  
  doValidation = (username, password, secondPassword) => {
    if (username.trim().length === 0) {
      this.setState({ usernameValidation: "is-invalid" });
    }

    if (password.trim().length === 0) {
      this.setState({ passwordValidation: "is-invalid" });
    }
      
    if (secondPassword.trim().length === 0) {
      this.setState({ secondPasswordValidation: "is-invalid" });
    }  
  };

  render() {
    return (
          <RegistrationComponent
            username={this.state.username}
            password={this.state.password}
            secondPassword={this.state.secondPassword}
            usernameValidation={this.state.usernameValidation}
            passwordValidation={this.state.passwordValidation}
            secondPasswordValidation={this.state.secondPasswordValidation}
            successfulRegistration={this.state.successfulRegistration}
            arePasswordsTheSame={this.state.arePasswordsTheSame}
            sufficientPasswordLength={this.state.sufficientPasswordLength}
            onSubmit={this.handleSubmit}
            onUsernameChange={this.handleChange}
            onPasswordChange={this.handleChange}
            onSecondPasswordChange={this.handleChange}
          />
    );
  }
}

export default RegistrationContainer;
