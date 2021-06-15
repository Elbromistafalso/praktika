import React, { Component } from "react"
import FileUploader from './components/FileUploader';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginContainer from './components/Login/LoginContainer';
import RegistrationContainer from './components/Registration/RegistrationContainer';
import LoggedInContainer from './components/LoggedIn/LoggedInContainer';
import PostCreationContainer from './components/PostCreation/PostCreationContainer';
import CommentCreationContainer from './components/CommentCreation/CommentCreationContainer';
import UnauthorizedAccessComponent from './components/UnauthorizedAccessComponent';

class App extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
    
  return (
    <div className="container">
      
      <BrowserRouter>
          <Switch>
            <Route exact path="/"><LoginContainer/></Route>
            <Route path="/registration"><RegistrationContainer/></Route>
            <Route path="/loggedIn"><LoggedInContainer/></Route>
            <Route path="/postCreation"><PostCreationContainer/></Route>
            <Route path="/commentCreation"><CommentCreationContainer/></Route>
            <Route path="/unauthorized"><UnauthorizedAccessComponent/></Route>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
    }
}

export default App;
