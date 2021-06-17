import React from "react";
import Proptypes from "prop-types";
import {almostCentered} from "../../styles";

let RegistrationComponent = ({
  username,
  password,
  secondPassword,
  usernameValidation,
  passwordValidation,
  secondPasswordValidation,
  successfulRegistration,
  arePasswordsTheSame,
  sufficientPasswordLength,
  onSubmit,
  onUsernameChange,
  onPasswordChange,
  onSecondPasswordChange
}) => {
  return (
    <div style={almostCentered} className="row">
      <div className="offset-2 col-12">
        <h3 className="text-info pt">MySocialNetwork</h3>
        <h3>Registracija</h3>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Prisijungimo vardas: </label>
            <input
              className={`form-control ${usernameValidation}`}
              id="username"
              value={username}
              onChange={onUsernameChange}
              name="username"></input>  
          </div>

          <div className="form-group">
            <label htmlFor="password" className="control-label">
              Slaptažodis:{" "}
            </label>
            <input
              className={`form-control ${passwordValidation}`}
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              name="password"></input>
          </div>

            <div className="form-group">
            <label htmlFor="secondPassword" className="control-label">
              Pakartoti slaptažodį:{" "}
            </label>
            <input
              className={`form-control ${secondPasswordValidation}`}
              type="password"
              id="secondPassword"
              value={secondPassword}
              onChange={onSecondPasswordChange}
              name="secondPassword"></input>
          </div>

          <button className="btn btn-primary mb-4" id="loginButton">
            Registruotis
          </button>
        </form>
        {successfulRegistration && (
          <div className="alert alert-success col-12" role="alert">
            Naujas vartotojas sėkmingai užregistruotas
          </div>
        )}
        {!arePasswordsTheSame && (
          <div className="alert alert-danger col-12" role="alert">
            Įvesti slaptažodžiai nesutampa
          </div>
        )}
        {!sufficientPasswordLength && (
          <div className="alert alert-danger col-12" role="alert">
            Slaptažodis turi būti bent 8 simbolių ilgio
          </div>
        )}
      </div>
    </div>
  );
};

RegistrationComponent.propTypes = {
  username: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  secondPassword: Proptypes.string.isRequired,
  usernameValidation: Proptypes.string.isRequired,
  passwordValidation: Proptypes.string.isRequired,
  secondPasswordValidation: Proptypes.string.isRequired,
  successfulRegistration: Proptypes.bool.isRequired,
  arePasswordsTheSame: Proptypes.bool.isRequired,
  sufficientPasswordLength: Proptypes.bool.isRequired,
  onUsernameChange: Proptypes.func.isRequired,
  onPasswordChange: Proptypes.func.isRequired,
  onSecondPasswordChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default RegistrationComponent;