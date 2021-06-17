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
              <div style={{boxShadow: "10px 10px 5px grey", backgroundColor: "#FFEFDB"}} >
                    <div className=" d-flex">
                      <img style={{width: 40, height: 50}} src={"data:image/png;base64,"+ userPhoto}/>
                      <span style={{alignSelf: "flex-end"}} className="pt-1">{userName}</span> 
                     </div>
                    <p style={{ whiteSpace: 'pre-wrap' }} className="mt-1">{text}</p>
        
               </div>
            </div>
          </div>
    )
}

export default Comment;