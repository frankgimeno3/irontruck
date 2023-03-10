import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h2 className="navbar-brand brandicon">Irontruck</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flexrow" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            { !isLoggedIn &&
              <>
              <Link to="/signup" className="nav-link">Signup</Link>
              <Link to="/login" className="nav-link">LogIn</Link>
              </>
            }
            { isLoggedIn &&
                <>
                <Link to="/dashboard" className="nav-link active" aria-current="page" href="/">Dashboard </Link>
                <Link to="/profile" className="nav-link">Profile </Link>
                {/* <Link to="/shipments" className="nav-link">Shipments</Link> */}
                <Link  className="nav-link" onClick={logOutUser}>LogOut</Link>
                </>
            }

          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;