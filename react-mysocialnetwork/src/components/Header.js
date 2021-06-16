import React from "react";
import {withRouter} from 'react-router-dom';

let Header = ({
    history,
    userName,
    image,
    onChangeImage
    
}) => {
    
    return (
        
        <div>
        
              <div className="row">
                <div className="col text-right">
                    <button className="btn btn-primary mt-5 mr-4" onClick={() => {document.getElementById("photoUpload").click();}}>Pakeisti nuotrauka</button>
                  <input style={{display: 'none'}} id="photoUpload" type="file" className="form-control" name="file" onChange={onChangeImage}/>
                    <img style={{width: 100, height: 140}} src={"data:image/png;base64,"+image}/>
                  <p>{userName}</p>
                 </div>
               </div>
               <div className="row">    
                 <div className="col text-right">
                  <div>
                    <button style={{width: "100px"}}className="btn btn-primary" onClick={() => {history.push("/")}}>Atsijungti</button>
                  </div>
                </div>
              </div>

       </div>
    )
}

export default withRouter(Header);