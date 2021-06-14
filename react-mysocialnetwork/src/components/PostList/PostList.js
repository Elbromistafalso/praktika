import React from "react";
import Post from './Post'

let PostList = ({
    posts,
    onLikesUpdate,
    onPostDelete,
    userName
}) => {
    

    return(
  
          posts.map(post => {
           
           return <Post
                     currentUser={userName}
                     id={post.id}
                     userName={post.userName}
                     userPhoto={post.userPhoto}
                     postDate={post.date}
                     nrOfLikes={post.likes}
                     postText={post.text}
                     postPhoto={post.photo}
                     onLikesUpdate={onLikesUpdate}
                     onPostDelete={onPostDelete}
                    />
           
          })

)
    
}



export default PostList;