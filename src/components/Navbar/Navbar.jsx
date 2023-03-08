import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h2 className="navbar-brand brandicon">Irontruck</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="/"><a className="nav-link active" aria-current="page" href="/">Dashboard</a> </Link>
          <Link to="/profile"><a className="nav-link" href="/profile">Profile</a></Link>
          <Link to="/signup"><a className="nav-link" href="/signup">Signup</a></Link>
          <Link to="/login"><a className="nav-link" href="/login">LogIn</a></Link>
          <Link to="/coversations"><a className="nav-link" href="/signup">Conversations</a></Link>
          <Link to="/"><a className="nav-link" href="/">LogOut</a></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

 