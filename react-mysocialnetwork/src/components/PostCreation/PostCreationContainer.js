import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import PostCreationComponent from './PostCreationComponent';

class PostCreationContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            userName: this.props.location.state.userName,
            postId: this.props.location.state.postId,
            postText: "",
            photo: ""
            
        }
    }
    
    componentDidMount() {
        
        console.log("postId:" + this.state.postId);
        
        if(this.state.userName === undefined){
            
            this.props.history.push("/unauthorized");
        }
            
        if(this.state.postId !== undefined){
                
                axios.get("http://localhost:8080/getPost/" + this.state.postId)
                  .then((res) => {
                    
                    this.setState({postText: res.data.text });
                    this.setState({photo: res.data.photo});
             
           });
                
            }
            
        
        
    } 
    
     handleChange = (e) => {
      this.setState({postText: e.target.value});
  }
    
    handlePhoto = (e) => {
        e.preventDefault();
        
        this.setState({
            photo: e.target.files[0]
        });
        
    }

    handleSubmit = (e) => {
      e.preventDefault();
        
        
      if(this.state.photo !== ""){
          
          let postDto = {
          text: this.state.postText
          }
      
          const formData = new FormData();
          formData.append('text', this.state.postText);
          formData.append('photo', this.state.photo);
      
          axios.post("http://localhost:8080/postWithPhoto/create/" + this.props.location.state.userName, formData)
            .then(() => {
              this.timer = setTimeout(() => {
                this.props.history.push({pathname:"/loggedIn", state: {userName: this.state.userName}})
                  }, 3000);
           });
          
          
      } else{
        
      let postDto = {
          text: this.state.postText
      }
      
      
      axios.post("http://localhost:8080/post/create/" + this.props.location.state.userName, postDto)
        .then(() => {
          this.timer = setTimeout(() => {
            this.props.history.push({pathname:"/loggedIn", state: {userName: this.state.userName}})
              }, 3000);
      });
          
      }
  }
    
    handleUpdate = (e) => {
      e.preventDefault();
        
        
      if(this.state.photo !== ""){
          
          let postDto = {
          text: this.state.postText
          }
      
          const formData = new FormData();
          formData.append('text', this.state.postText);
          formData.append('photo', this.state.photo);
      
          axios.put("http://localhost:8080/post/update/" + this.state.postId, formData)
            .then(() => {
              this.timer = setTimeout(() => {
                this.props.history.push({pathname:"/loggedIn", state: {userName: this.state.userName}})
                  }, 1000);
           });
          
          
      } else{
        
      let postDto = {
          text: this.state.postText
      }
      
      
      axios.post("http://localhost:8080/post/create/" + this.props.location.state.userName, postDto)
        .then(() => {
          this.timer = setTimeout(() => {
            this.props.history.push({pathname:"/loggedIn", state: {userName: this.state.userName}})
              }, 500);
      });
          
      }        
        
        
    }
    
    
    
    render(){
        
        return(
            <PostCreationComponent
              postId={this.state.postId}
              postText={this.state.postText}
              onTextChange={this.handleChange}
              onPhotoChange={this.handlePhoto}
              onSubmit={this.handleSubmit}
              onUpdate={this.handleUpdate}
            />
        )
    }
    
}

export default withRouter(PostCreationContainer);