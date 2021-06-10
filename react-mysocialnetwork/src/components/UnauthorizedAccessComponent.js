import axios from "axios";
import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class UnauthorizedAccessComponent extends Component{
    
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
       this.timer = setTimeout(() => {
         this.props.history.push("/")
          }, 3000);
    }
    
    render(){
        return(
            <div className="alert alert-danger col-12" role="alert">
            Neturite leidimo peržiūrėti šio puslapio 
            </div>
        );
    }
}
    
    export default withRouter(UnauthorizedAccessComponent);