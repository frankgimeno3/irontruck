import "./LoginTranspPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import transpService from "../../services/transp.service";

function LoginTranspPage() {
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

    transpService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div className="loginPage">
        <div >
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
          <Link to={""} className="dropdown-item">  Sign up  </Link>
        </div>
      </div>
    </>
  );
}

export default LoginTranspPage;
