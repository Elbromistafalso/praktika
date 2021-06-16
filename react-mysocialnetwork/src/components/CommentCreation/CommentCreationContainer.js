import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import CommentCreationComponent from './CommentCreationComponent';
import Header from '../Header'

class CommentCreationContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            userName: this.props.location.state.userName,
            image: this.props.location.state.image,
            postId: this.props.location.state.postId,
            commentText: ""
            
        }
    }
    
    componentDidMount() {
        
        console.log("postId:" + this.state.postId);
        
        if(this.state.userName === undefined){
            
            this.props.history.push("/unauthorized");
        }
                
        
    } 
    
     handleChange = (e) => {
      this.setState({commentText: e.target.value});
  }
    
    handleSubmit = (e) => {
      e.preventDefault();
        
      let commentDto = {
          text: this.state.commentText
          }
              
      
          axios.post("http://localhost:8080/comment/" + this.state.userName + "/create/" + this.state.postId, commentDto)
            .then(() => {
              this.timer = setTimeout(() => {
                this.props.history.push({pathname:"/loggedIn", state: {userName: this.state.userName}})
                  }, 3000);
           });
          
          
      
  }
        
    
    render(){
        
        return(
          <div>
            <Header
             userName={this.state.userName}
             image={this.state.image}
             onChangeImage={this.onFileChangeHandler}
            />            
            <CommentCreationComponent
              postId={this.state.postId}
              commentText={this.state.commentText}
              onTextChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>    
        )
    }
    
}

export default withRouter(CommentCreationContainer);