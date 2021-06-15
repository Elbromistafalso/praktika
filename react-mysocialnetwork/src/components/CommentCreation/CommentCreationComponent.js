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
                <label>
                    Komentaro tekstas:
                    <textarea value={commentText} style={{width: "500px", height: "300px"}} onChange={onTextChange} />
                 </label>
                 <input type="submit" value="Sukurti"/>
              </form>
            </div>
          </div>
        </div>
    )
}

export default CommentCreationComponent;