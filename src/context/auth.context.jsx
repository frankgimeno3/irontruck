import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTransportist, setIsTransportist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })  
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data);
          setIsTransportist(response.data.isTransportist);
        })
        .catch(err => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          setIsTransportist(false);
          console.log(err);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      setIsTransportist(false);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setUser(null);
    setIsTransportist(false);
  };
  const getToken = () => {
    return localStorage.getItem("authToken");
  }
  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        getToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };