import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
function Navbar() {

  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link to="/" className="nav-link active" aria-current="page" href="/">        
        <h2 className="navbar-brand brandicon">Irontruck</h2> 
      </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flexrow" id="navbarNavAltMarkup">
          <div className="navbar-nav">


            {isLoggedIn &&
              <>
                <Link to="/dashboard" className="nav-link active" aria-current="page" href="/">Dashboard </Link>
                <Link to="/profile" className="nav-link">Profile </Link>
                <Link to="/mycargos" className="nav-link">Shipments</Link>
                <Link to="/" className="nav-link" onClick={logOutUser}>LogOut</Link>
              </>
            }
            {!isLoggedIn &&
              <>
                <Link to="/signup" className="nav-link">SignUp</Link>
                <Link to="/login" className="nav-link">LogIn</Link>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;