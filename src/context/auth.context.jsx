import React, { useState, useEffect } from "react";
//import authService from "../services/auth.service";
import axios from "axios";
const AuthContext = React.createContext();
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  const authenticateUser = () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    // If the token exists in the localStorage
    if (storedToken) {
      // Send a request to the server using axios
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data);
        })
        .catch(err => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          console.log(err)
        });

      // Or using a service
      // authService
      //   .verify()
      //   .then((response) => {
      //     // If the server verifies that JWT token is valid  :marca_de_verificación_blanca:
      //     const user = response.data;
      //     // Update state variables
      //     setIsLoggedIn(true);
      //     setIsLoading(false);
      //     setUser(user);
      //   })
      //   .catch((error) => {
      //     // If the server sends an error response (invalid token) :x:
      //     // Update state variables
      //     setIsLoggedIn(false);
      //     setIsLoading(false);
      //     setUser(null);
      //   });
    } else {
      // If the token is not available
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };
  const logOutUser = () => {
    // Upon logout, remove the token from the localStorage
    removeToken();
    authenticateUser();
  };
  const getToken = () => {
    return localStorage.getItem("authToken");
  }
  useEffect(() => {
    // Run this code once the AuthProviderWrapper component in the App loads for the first time.
    // This effect runs when the application and the AuthProviderWrapper component load for the first time.
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







