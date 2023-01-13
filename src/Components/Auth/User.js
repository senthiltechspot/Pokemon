import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

import { useNavigate } from "react-router-dom";
const User = () => {

  const navigate = useNavigate();
  
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading === true) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {isAuthenticated && (
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <p className="navbar-brand" >
              <img
                src={user.picture}
                alt={user.name}
                width="40"
                height="40"
                className="rounded-circle"
                onClick={() => { navigate(`/user/Profile`) }} 
                />
            </p>
            <Logout />
          </div>
        </nav>
      )}
    </div>
  );
};

export default User;
