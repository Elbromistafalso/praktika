import React from "react";
import Proptypes from "prop-types";

let PostCreationComponent = ({
    postId,
    postText,
    photo,
    noText,
    onTextChange,
    onPhotoChange,
    onSubmit,
    onUpdate
}) => {
    
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={postId === undefined ? onSubmit : onUpdate}>        
                <label>
                    Pranešimo tekstas:
                    <textarea value={postText} style={{width: "500px", height: "300px"}} onChange={onTextChange} />
                 </label>
                 <input type="submit" value={postId === undefined ? "Sukurti" : "Atnaujinti"}/>
              </form>
            </div>
            <div className="col">
              <div className="form-group files color">
                <input type="file" className="form-control" name="photo" onChange={onPhotoChange}/>
              </div>
            </div>
                {noText && (
                  <div className="alert alert-danger col-12 m-4" role="alert">
                Pranešimo tekstas yra privalomas
                </div>
              )}
          </div>
        </div>
    )
}

export default PostCreationComponent;