import axios from "axios";
import React, { Component } from "react";

class FileUploader extends Component{
    
    constructor(){
        super();
        this.state = {
            
            selectedFile: null,
            image: ""
        }
    }
    
    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        
        axios.post("http://localhost:8080/upload", formData)
            .then(res => {
                    axios.get("http://localhost:8080/getImage/1").then(res => {
                        this.setState({image: res.data});
                        
                    });
            
            
            })
    };


    
    render(){
        
        console.log("Bytes= " + this.state.image)
        
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                        </div>
        
        <div>
        <img style={{width: 800, height: 800}} src={"data:image/jpg;base64,"+this.state.image} />
        </div>
                </div>
            </div>
        </div>
    )
  }
    
}

export default FileUploader;