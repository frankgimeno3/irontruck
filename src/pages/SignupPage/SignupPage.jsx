import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePasswordRep = (e) => setPasswordRep(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, phoneNumber, address };


    if (email === "" || password === "" || name === "" || phoneNumber === "" || address === "") {
      setErrorMessage("faltan campos!");
      return;
    }
    if (password !== passwordRep) {
      setErrorMessage("passwords no coinciden!");
      return;
    }

    // Send a request to the server using axios

    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`,
      requestBody,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        navigate("/login");
      })

      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });

  };
  return (
    <>

      <div className="Loading Page">
        <form className="px-4 py-3" onSubmit={handleSignupSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail1" name="email" value={email} onChange={handleEmail} placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" name="password" value={password} onChange={handlePassword} placeholder="Password" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword11" className="form-label">Repeat Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword1" name="password" value={passwordRep} onChange={handlePasswordRep} placeholder="Password" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="exampleDropdownFormEmail1" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} placeholder="654432234" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Address</label>
            <input type="text" className="form-control" id="exampleDropdownFormEmail1" name="address" value={address} onChange={handleAddress} placeholder="c/falsa 123, Barcelona" />
          </div>

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="dropdown-divider"></div>
        <p>New around here?</p>
        <Link to={"/login"} className="dropdown-item">  Log In  </Link>
        <div className="input-group mb-3">
          <h1>Sign Up</h1>

          <form onSubmit={handleSignupSubmit}>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleEmail} />

            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleName} />

            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handlePassword} />


            <label>Repeat Password</label>
            <input type="password" name="password" value={passwordRep} onChange={handlePasswordRep} />

            <label>Phone Number</label>
            <input type="number" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} />

            <label>Address</label>
            <input type="text" name="address" value={address} onChange={handleAddress} />

            <button type="submit">Sign Up</button>
          </form>

        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
      <img src="https://www.rlicorp.com/sites/default/files/banner-images/LossControl_WebsiteHeader_02_72dpi_1.jpg" alt="banner" className="landingjpg" />
    </>
  );
}

export default SignupPage;

<div className="card">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link href="#" className="btn btn-primary">Go somewhere</Link>
    <Link href="#" className="btn btn-primary">Go somewhere</Link>
  </div>
</div> 