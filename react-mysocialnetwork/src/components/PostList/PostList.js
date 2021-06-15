import React from "react";
import Post from './Post'

let PostList = ({
    posts,
    onLikesUpdate,
    onPostDelete,
    onPostEdit,
    onComment,
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
                     comments={post.comments}
                     onLikesUpdate={onLikesUpdate}
                     onPostDelete={onPostDelete}
                     onPostEdit={onPostEdit}
                     onComment={onComment}
                    />
           
          })

)
    
}



export default PostList;