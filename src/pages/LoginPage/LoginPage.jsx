import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
    <div className="LoginPage">
      <h1>Login as a Sender</h1>


      <div className="Loading Page">
        <form className="px-4 py-3" onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" name="email" value={email} onChange={handleEmail} placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" name="password" value={password} onChange={handlePassword} placeholder="Password" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label" htmlFor="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="dropdown-divider"></div>
        <p>New around here?</p>
        <Link to={"/signup"} className="dropdown-item">  Sign up  </Link>
        <img src="https://www.rlicorp.com/sites/default/files/banner-images/LossControl_WebsiteHeader_02_72dpi_1.jpg" alt="banner" className="landingjpg" />
      </div>
    </div>
    <footer>
                <div className="legal-notice">
                    <a href="/">Legal notice</a>
                </div>
                <div className="cookies-policy">
                    <a href="/">Cookie policy</a>
                </div>
                <div className="contact-us">
                    <a href="/">Contact</a>
                </div>
                <div className="copyright">
                    © 2023 All rights reserved.
                </div>
            </footer>
    </>



  );
}

export default LoginPage;




