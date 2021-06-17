import React from "react";
import Proptypes from "prop-types";

let CommentCreationComponent = ({
    postId,
    commentText,
    onTextChange,
    onSubmit
}) => {
    
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={onSubmit}>
                    <p className="mb-0">Komentaro tekstas:</p>
                    <textarea value={commentText} style={{width: "500px", height: "300px"}} onChange={onTextChange} />
                 <button className="btn btn-primary ml-2">Parašyti komentarą</button>
              </form>
            </div>
          </div>
        </div>
    )
    
    
}

export default CommentCreationComponent;