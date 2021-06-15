import React from "react";

let Comment = ({
    id,
    userName,
    userPhoto,
    text
}) => {
    
    return (
          <div className="row">
            <div className="col">
                    <div className="border d-flex">
                      <img style={{width: 40, height: 50}} src={"data:image/png;base64,"+ userPhoto}/>
                      <span style={{alignSelf: "flex-end"}} className="pt-1">{userName}</span>
                      <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p> 
                     </div>
            </div>
          </div>
    )
}

export default Comment;