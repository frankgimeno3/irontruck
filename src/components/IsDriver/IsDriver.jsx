import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Dashboard from "../../pages/Dashboard/Dashboard";

function IsDriver({ children }) {
  const { isTransportist, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }

  if (isTransportist) {
    // If the user is logged in, navigate to home page ❌
    return <Navigate to="/" />;
  }

  // If the user is not logged in, allow to see the page ✅
  return children;
}

export default IsDriver;
