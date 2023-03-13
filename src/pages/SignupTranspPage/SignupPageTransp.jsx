import "./SignupPageTransp.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import authService from "../../services/auth.service";
import axios from "axios";

function SignupTranspPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRep, setPasswordRep] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [professionalType, setProfessionalType] = useState("");
    const [company, setCompany] = useState("");
    const [nif, setNif] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handlePasswordRep = (e) => setPasswordRep(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
    const handleLicensePlate = (e) => setLicensePlate(e.target.value);
    const handleProfessionalType = (e) => setProfessionalType(e.target.value);
    const handleCompany = (e) => setCompany(e.target.value);

    const handleNif = (e) => setNif(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { email, password, name, phoneNumber, licensePlate, professionalType, company, nif, };


        if (email === "" || password === "" || name === "" || phoneNumber === "" || nif === "" || licensePlate === "") {
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
            `${process.env.REACT_APP_SERVER_URL}/transportist/signup`,
            requestBody,
            {
                headers: { Authorization: `Bearer ${authToken}` },
            })
            .then((response) => {
                navigate("transportist/login");
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
                const errorDescription = error.response.data.message;
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

                    <label>Linsence Plate</label>
                    <input type="text" name="address" value={licensePlate} onChange={handleLicensePlate} />

                    <label>NIF</label>
                    <input type="text" name="address" value={nif} onChange={handleNif} />

                    <label>Profesional type</label>
                    <input type="text" name="address" value={professionalType} onChange={handleProfessionalType} />

                    <label>Company </label>
                    <input type="text" name="Company" value={company} onChange={handleCompany} />


                    <button type="submit">Sign Up</button>
                </form>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <p>Already have account?</p>
                <Link to={"transportist/login"}> Login</Link>
            </div>
            <img src="https://www.rlicorp.com/sites/default/files/banner-images/LossControl_WebsiteHeader_02_72dpi_1.jpg" alt="banner" className="landingjpg" />
        </>
    );
}

export default SignupTranspPage;
