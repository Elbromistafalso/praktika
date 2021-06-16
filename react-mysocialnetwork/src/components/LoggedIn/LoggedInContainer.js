import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";
import PostList from '../PostList/PostList';
import Header from '../Header'

class LoggedInContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            
            userName: this.props.location.state.userName,
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
            searchParameter: "",
            posts: [],
            specificUserNamePostsNotFound: false,
            specificContentNotFound: false,
            chosenSearchOption: "searchByUsername"
            
            
        }
    }
    
    componentDidMount() {
        
        if(this.state.userName === undefined){
            
            this.props.history.push("/unauthorized");
        } else{
            
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
        this.props.history.push({pathname:"/CommentCreation", state: {userName: this.state.userName, postId: e.target.value,  image: this.state.image }})
        
        
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
    
    onSearchParameterChange = (e) => {
        e.preventDefault();
        this.setState({searchParameter: e.target.value})
    }
    
    handleSearchOptionChange = (e) => {
        e.preventDefault();
        this.setState({chosenSearchOption: e.target.value})
    }
    
    handeSearch = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/posts/" + this.state.chosenSearchOption + "/" + this.state.searchParameter)
         .then(res => {
            this.setState({posts: res.data});
            
            if(res.data.length === 0){
                if(this.state.chosenSearchOption === "searchByUsername"){
                     this.setState({specificUserNamePostsNotFound: true})
                 }else{
                     this.setState({specificContentNotFound: true})
                 }
                this.timer = setTimeout(() => {
                this.setState({searchParameter: ""})
                this.setState({specificUserNamePostsNotFound: false})
                    this.setState({specificContentNotFound: false})
                axios.get("http://localhost:8080/posts")
                    
                  .then(res => {this.setState({posts: res.data})});  
                  }, 5000);
            }else{
                this.setState({searchParameter: ""})
            }
            
            
        })
        
        
    }
    
    render(){
        
        return(
            
            <div className="container">
            <Header
             history= {this.props.history}
             userName={this.state.userName}
             image={this.state.image}
             onChangeImage={this.onFileChangeHandler}
            />
              {this.state.specificUserNamePostsNotFound && (
                <div className="alert alert-danger col-12" role="alert">
                  Nerasta jokių {this.state.searchParameter} vartotojo pranešimų arba toks vartotojas neegzistuoja
                </div>
              )}
              {this.state.specificContentNotFound && (
                <div className="alert alert-danger col-12" role="alert">
                  Nerasta jokių pranešimų su ieškotu turiniu
                </div>
              )}

                <form className="form" onSubmit={this.handeSearch}>
                  <div className="form-group">
                    <label htmlFor="parameter">Pranešimų paieška pagal</label>
                    <select className="mx-2" value={this.state.chosenSearchOption} onChange={this.handleSearchOptionChange}>
                      <option value="searchByUsername">vartotojo vardą</option>
                      <option value="searchByContent">pranešimo turinį</option>
                    </select>
                    <input name="parameter" value={this.state.searchParameter} onChange={this.onSearchParameterChange}></input>
                <   button className="btn btn-primary mb-3 mx-1">Ieškoti</button>
                    <button className="btn btn-primary mb-3" onClick={() => {this.props.history.push({pathname:"/postCreation", state: {userName: this.state.userName, image: this.state.image}})}}>Naujas pranešimas</button>
                  </div>
               </form>

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