import React from "react";

let Post = ({
    currentUser,
    id,
    userName,
    userPhoto,
    postDate,
    nrOfLikes,
    postText,
    postPhoto,
    onLikesUpdate,
    onPostDelete
}) => {
    
    return (
          <div className="row">
            <div className="col">
                    <div className="border d-flex">
                      <img style={{width: 40, height: 50}} src={"data:image/png;base64,"+ userPhoto}/>
                      <span style={{alignSelf: "flex-end"}} className="pt-1">{userName}</span>
                      <span>{postDate}</span>
                      <button className="btn btn-primary" onClick={onLikesUpdate} value={id}>Pamėgti</button>
                      {currentUser === userName ? <button className="btn btn-primary" onClick={onPostDelete} value={id}>Ištrinti</button>
                        : null}
                      <span>{nrOfLikes}</span>
                    </div>
                    <img style={{width: 240, height: 300}} src={"data:image/png;base64,"+ postPhoto}/>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{postText}</p>      
            </div>
          </div>
    )
}

export default Post;