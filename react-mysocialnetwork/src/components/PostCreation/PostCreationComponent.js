import React from "react";
import Proptypes from "prop-types";

let PostCreationComponent = ({
    postText,
    onTextChange,
    onPhotoChange,
    onSubmit
}) => {
    
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={onSubmit}>
                <label>
                    Pranešimo tekstas:
                    <textarea value={postText} style={{width: "500px", height: "300px"}} onChange={onTextChange} />
                 </label>
                 <input type="submit" value="Submit" />
              </form>
            </div>
            <div className="col">
              <div className="form-group files color">
                <label>Pasirinkti nuotrauką:</label>
                <input type="file" className="form-control" name="photo" onChange={onPhotoChange}/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PostCreationComponent;