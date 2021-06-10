import React from "react";
import Proptypes from "prop-types";

let LoginComponent = ({
  username,
  password,
  onSubmit,
  areCredentialsIncorrect,
  emptyFields,
  onUsernameChange,
  onPasswordChange,
}) => {
  return (
    <div className="row">
      <div id="loginForm" className="offset-2 col-8">
        <h3 id="loginh1">Prisijungimas</h3>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Prisijungimo vardas: </label>
            <input
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
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              name="password"></input>
          </div>

          <button className="btn btn-primary mb-4" id="loginButton">
            Prisijungti
          </button>
        </form>
        {areCredentialsIncorrect && (
          <div className="alert alert-danger col-12" role="alert">
            Prisijungimo duomenys neteisingi
          </div>
        )}
        {emptyFields && (
          <div className="alert alert-danger col-12" role="alert">
            Įveskite savo prisijungimo vardą ir slaptažodį
          </div>
        )}
      </div>
    </div>
  );
};

LoginComponent.propTypes = {
  username: Proptypes.string.isRequired,
  password: Proptypes.string.isRequired,
  areCredentialsIncorrect: Proptypes.bool.isRequired,
  emptyFields: Proptypes.bool.isRequired, 
  onUsernameChange: Proptypes.func.isRequired,
  onPasswordChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default LoginComponent;