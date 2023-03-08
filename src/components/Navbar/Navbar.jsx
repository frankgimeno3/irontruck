import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h2 class="navbar-brand">Navbar</h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          <Link to="/"><a class="nav-link active" aria-current="page" href="/">Dashboard</a> </Link>
          <Link to="/"><a class="nav-link" href="/profile">Profile</a></Link>
          <Link to="/"><a class="nav-link" href="/signup">Signup</a></Link>
          <Link to="/"><a class="nav-link" href="/login">LogIn</a></Link>
          <Link to="/"><a class="nav-link" href="/signup">Signup</a></Link>
          <Link to="/"><a class="nav-link" href="/">LogOut</a></Link>
          <Link to="/"><a class="nav-link" href="/signup">Conversations</a></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

 