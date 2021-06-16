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
          <div className="row">
            <div className="col">
                    <div className="border d-flex">
                      <img style={{width: 40, height: 50}} src={"data:image/png;base64,"+ userPhoto}/>
                      <span style={{alignSelf: "flex-end"}} className="pt-1">{userName}</span>
                      <span>{postDate}</span>
                      <button className="btn btn-primary" onClick={onLikesUpdate} value={id}>Pamėgti</button>
                      <button className="btn btn-primary" onClick={onComment} value={id}>Komentuoti</button>
                      {currentUser === userName ? <button className="btn btn-primary" onClick={onPostDelete} value={id}>Ištrinti</button>
                        : null}
                      {currentUser === userName ? <button className="btn btn-primary" onClick={onPostEdit} value={id}>Redaguoti</button>
                        : null}
                      <FontAwesomeIcon icon={faThumbsUp}/>
                      <span>{nrOfLikes}</span>
                      <FontAwesomeIcon icon={faComments} />
                      <span>{comments.length}</span>
                    </div>
                    {postPhoto !== null ? <img style={{width: 240, height: 300}} src={"data:image/png;base64,"+ postPhoto}/> : null}
                    <p style={{ whiteSpace: 'pre-wrap' }}>{postText}</p>
           
                               <CommentList
                                 comments={comments}
                                />
    
            </div>
          </div>
    )
}

export default Post;