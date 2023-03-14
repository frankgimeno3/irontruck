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

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
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
              <label htmlFOR="exampleDropdownFormPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword1" name="password" value={password} onChange={handlePassword} placeholder="Password" />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" HTMLfor="dropdownCheck">
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
        </div>

        <img src="https://www.rlicorp.com/sites/default/files/banner-images/LossControl_WebsiteHeader_02_72dpi_1.jpg" alt="banner" className="landingjpg" />




      </>
      );
}

      export default LoginPage;




