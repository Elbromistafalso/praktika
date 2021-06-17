import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import PostCreationComponent from './PostCreationComponent';
import Header from '../Header'

class PostCreationContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            userName: this.props.location.state.userName,
            image: this.props.location.state.image,
            postId: this.props.location.state.postId,
            postText: "",
            photo: "",
            noText: false
            
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
                    this.setState({photo: ""});
             
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
    
    handlePhotoRemove = () => {
        this.state({photo: ""})
    }

    handleSubmit = (e) => {
      e.preventDefault();
        
      if(this.state.postText === ""){
          this.setState({noText: true})
      }else{ 
        
        
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
        
  }
    
    handleUpdate = (e) => {
      e.preventDefault();
        
        
      if(this.state.postText === ""){
          this.setState({noText: true})
      }else{
           
        
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
      
      
      axios.put("http://localhost:8080/post/updateWithoutPhoto/" + this.state.postId, postDto)
        .then(() => {
          this.timer = setTimeout(() => {
            this.props.history.push({pathname:"/loggedIn", state: {userName: this.state.userName}})
              }, 500);
      });
          
      }        
        
      }
    
        
    }
    
    
    
    render(){
        
        return(
          <div>    
            <Header
             userName={this.state.userName}
             image={this.state.image}
             onChangeImage={this.onFileChangeHandler}
            />
            <PostCreationComponent
              postId={this.state.postId}
              postText={this.state.postText}
              photo={this.state.photo}
              noText={this.state.noText}
              onTextChange={this.handleChange}
              onPhotoChange={this.handlePhoto}
              onSubmit={this.handleSubmit}
              onUpdate={this.handleUpdate}
              onPhotoRemove={this.handlePhotoRemove}
            />
           </div>    
        )
    }
    
}

export default withRouter(PostCreationContainer);