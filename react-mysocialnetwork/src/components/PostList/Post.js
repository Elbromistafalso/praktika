import React from "react";
import CommentList from '../CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons'

let Post = ({
    currentUser,
    id,
    userName,
    userPhoto,
    postDate,
    nrOfLikes,
    postText,
    postPhoto,
    comments,
    onLikesUpdate,
    onPostDelete,
    onPostEdit,
    onComment
}) => {
    
    return (
          <div className="row mb-5">
            <div className="col">
        
              <div style={{boxShadow: "10px 10px 5px grey", backgroundColor: "#f0f8ff"}}>
        
                    <div className="d-flex pt-2">
                      <img style={{width: 40, height: 50}} src={"data:image/png;base64,"+ userPhoto}/>
                      <span style={{alignSelf: "flex-end"}} className="pt-1">{userName}</span>
                      <span>{postDate}</span>
                      <div className="ml-3">
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <span className="mr-2">{nrOfLikes}</span>
                        <FontAwesomeIcon icon={faComments} />
                        <span>{comments.length}</span>
                      </div>
                      <button style={{width:"90px", height:"40px"}} className="btn btn-primary mr-1" onClick={onLikesUpdate} value={id}>Pamėgti</button>
                      <button style={{width:"110px", height:"40px"}} className="btn btn-primary mr-1" onClick={onComment} value={id}>Komentuoti</button>
                      {currentUser === userName ? <button style={{width:"90px", height:"40px"}} className="btn btn-primary mr-1" onClick={onPostDelete} value={id}>Ištrinti</button>
                        : null}
                      {currentUser === userName ? <button  style={{width:"90px", height:"40px"}} className="btn btn-primary mr-1" onClick={onPostEdit} value={id}>Redaguoti</button>
                        : null}    
                    </div>
        
        
                    {postPhoto !== null ? <img style={{width: 160, height: 200}} className="d-block m-auto" src={"data:image/png;base64,"+ postPhoto}/> : null}
                    <p className="mb-3" style={{ whiteSpace: 'pre-wrap' }}>{postText}</p>
        
                </div>

                      {comments.length !== 0 ? <h6 className="mt-4">Komentarai:</h6> : null }
                               <CommentList
                                 comments={comments}
                                />
    
            </div>
          </div>
    )
}

export default Post;