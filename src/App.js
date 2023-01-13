import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Login from "./Components/Auth/Login";
import Home from "./Components/Cards/Home";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="d-flex justify-content-center align-self">
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">Login to see the Pokemons</h5>
              <Login />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
