import React from "react";
import Comment from './Comment'

let CommentList = ({
    comments
}) => {
    

    return(
  
          comments.map(comment => {
           
           return( 
               
               <Comment
                     id={comment.id}
                     userName={comment.userName}
                     userPhoto={comment.userPhoto}
                     text={comment.text}
                    />
           
               )
          })

)
    
}

export default CommentList;