import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import User from "../Auth/User";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading === true) {
    return <div>Loading....</div>;
  }
  return (
    <div>

      <User/>
    <div className="d-flex justify-content-center">
      {isAuthenticated && (
        <div className="card" style={{width :  "18rem"}}>
          <img src={user.picture} className="card-img-top" alt="Img Not Available" />
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
           
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Email : {user.email}</li>
            <li className="list-group-item">First Name :{user.given_name}</li>
            <li className="list-group-item">Last Name :{user.family_name}</li>
          </ul>
         
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
