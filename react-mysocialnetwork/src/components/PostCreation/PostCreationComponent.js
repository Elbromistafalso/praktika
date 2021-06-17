import React from "react";
import Proptypes from "prop-types";

let PostCreationComponent = ({
    postId,
    postText,
    photo,
    noText,
    onTextChange,
    onPhotoChange,
    onPhotoRemove,
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
                 <button className="btn btn-primary">{postId === undefined ? "Sukurti" : "Atnaujinti"}</button>
              </form>
            </div>
            <div className="col">
              <div className="form-group files color">
                <button className="btn btn-primary mt-5 mr-4" onClick={() => {document.getElementById("photoUpload2").click();}}>Pridėti nuotrauką</button>
                <input style={{display: 'none'}} id="photoUpload2" type="file" className="form-control" name="photo" onChange={onPhotoChange}/>
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