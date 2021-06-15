import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import PostList from '../PostList/PostList';

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
            firstPostLikes: "",
            commentText: "",
            firstCommentUsername: "",
            firstCommentPhoto: "",
            firstCommentText: "",
            posts: []
            
            
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
                this.setState({firstPostLikes: res.data.likes})
            });
            axios.get("http://localhost:8080/posts")
                .then(res => {this.setState({posts: res.data})});
            
            
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


    handleLikes = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8080/post/addLike/"+ e.target.value + "/" + this.props.location.state.userName)
            .then(res => {
           
              axios.get("http://localhost:8080/posts")
                .then(res => {this.setState({posts: res.data})});
            
            })
        
        
    }
    
    handleCommentChange = (e) => {
        e.preventDefault();
        this.setState({commentText: e.target.value})
        
        
    }
    
    handleComments = (e) => {
        e.preventDefault();
        this.props.history.push({pathname:"/CommentCreation", state: {userName: this.state.userName, postId: e.target.value}})
        
        
    }
    
    handlePostDelete = (e) => {
        e.preventDefault();
        
        axios.delete("http://localhost:8080/post/delete/" + e.target.value)
         .then(res => {
              axios.get("http://localhost:8080/posts")
                .then(res => {this.setState({posts: res.data})});                    
        })
    }
    
    handlePostEdit = (e) => {
        e.preventDefault();
        this.props.history.push({pathname:"/postCreation", state: {userName: this.state.userName, postId: e.target.value}})
        
        
    }
    
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
              <PostList
                posts={this.state.posts}
                userName={this.state.userName}
                onLikesUpdate={this.handleLikes}
                onPostDelete={this.handlePostDelete}
                onPostEdit={this.handlePostEdit}
                onComment={this.handleComments}
              />
            </div>
        );
    }
}

export default withRouter(LoggedInContainer);