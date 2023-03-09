import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import authService from "../../services/auth.service";
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


      // Or using a service
      // authService
      //   .signup(requestBody)
      //   .then((response) => {
      //     // If the POST request is successful redirect to the login page
      //     navigate("/login");
      //   })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = "esto no funciona"
        setErrorMessage(errorDescription);
      });

    //APUNTES
    //   axios.post(process.env.REACT_APP_API_URL + "/auth/signup", { email, password, name, phoneNumber, address })
    //     .then(response => {
    //       console.log(response.data);
    //       navigate("/login");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       setErrorMessage("Ha habido un error y no se ha podido registrar");
    //       return;
    //     })
    // };
  };
  return (
    <>
      <div className="SignupPage">
        <h1>Sign Up</h1>

        <form onSubmit={handleSignupSubmit}>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} />

          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} />

          <label>Password:</label>
          <input
            type="password" name="password" value={password} onChange={handlePassword} />

          <label>Repeat Password</label>
          <input type="password" name="password" value={passwordRep} onChange={handlePasswordRep} />

          <label>Phone Number</label>
          <input type="number" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} />

          <label>Address</label>
          <input type="text" name="address" value={address} onChange={handleAddress} />



          <button type="submit">Sign Up</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
      <img src="https://www.rlicorp.com/sites/default/files/banner-images/LossControl_WebsiteHeader_02_72dpi_1.jpg" alt="banner" className="landingjpg" />
    </>
  );
}

export default SignupPage;
