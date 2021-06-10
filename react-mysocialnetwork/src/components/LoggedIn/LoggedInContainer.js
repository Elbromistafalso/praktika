import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";

class LoggedInContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            userName: "",
            image: "",
            selectedImage: "",
            firstPostText: "",
            firstPostPhoto: "",
            firstPostUsername: "",
            firstPostUserPhoto: "",
            firstPostDate: "",
            
        }
    }
    
    componentDidMount() {
        
        if(this.props.location.state === undefined){
            
            this.props.history.push("/unauthorized");
        } else{
            this.setState({userName: this.props.location.state.userName })
            axios.get("http://localhost:8080/user/" + this.props.location.state.userName)
              .then(res => {this.setState({image: res.data.userPhoto})});
            axios.get("http://localhost:8080/getPost")
              .then(res => {
                this.setState({firstPostText: res.data.text})
                this.setState({firstPostPhoto: res.data.photo})
                this.setState({firstPostUsername: res.data.userName})
                this.setState({firstPostUserPhoto: res.data.userPhoto})
                this.setState({firstPostDate: res.data.date})
            });
        }
        
    }
    
        onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        
        axios.post("http://localhost:8080/user/" + this.props.location.state.userName + "/upload", formData)
            .then(res => {
            console.log("hello" + res.data);
                  this.setState({image: res.data.userPhoto});
            
            })
    };
    
    render(){
        
        return(
            
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <input id="photoUpload" type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                </div>
                <div className="col text-right">
                    <img style={{width: 80, height: 100}} src={"data:image/png;base64,"+this.state.image}/>
                  <p>{this.state.userName}</p>
                </div>
                </div>
                <div className="row">
                <div className="col text-right">
                  <div>
                    <button className="btn btn-primary" onClick={() => {this.props.history.push("/")}}>Atsijungti</button>
                    <button className="btn btn-primary" onClick={() => {this.props.history.push({pathname:"/postCreation", state: {userName: this.state.userName}})}}>Naujas pranešimas</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                    <div className="border d-flex">
                      <img style={{width: 40, height: 50}} src={"data:image/png;base64,"+this.state.firstPostUserPhoto}/>
                      <span style={{alignSelf: "flex-end"}} className="pt-1">{this.state.firstPostUsername}</span>
                      <span>{this.state.firstPostDate}</span>
                    </div>
                    <img style={{width: 240, height: 300}} src={"data:image/png;base64,"+this.state.firstPostPhoto}/>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{this.state.firstPostText}</p>
                </div>
              </div>
            </div>
        );
    }
}

export default withRouter(LoggedInContainer);