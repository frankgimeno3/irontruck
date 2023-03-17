// import axios from 'axios'
import React, { useState, useContext } from "react";
import './ProfileDataForm.css';
import ProfileService from "../../services/profile.service";
import { AuthContext } from "../../context/auth.context";
import service from "../../services/upload.service";
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";

function EditProfileForm() {

  // const navigate = useNavigate();

  const { user} = useContext(AuthContext);
  // const { authenticateUser, isLoggedIn, getToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
      phoneNumber: 0,
      address: "",
      password: "",
      repeatPassword: ""
    });
  const [image, setImage] = useState("");
  // const [isLoading, setIsLoading] = useState(true); // nuevo estado
  // const [isTransportist, setIsTransportist] = useState();
  // const [currentUser, setCurrentUser] = useState();
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);

    // setIsLoading(true); // establecer isLoading a true

    service
      .uploadImage(uploadData)
      .then(response => {
        setImage(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err))
      .finally(() => {
        // setIsLoading(false); // establecer isLoading a false
      });
  };

  // const getCurrentUser = async (id) => {
  //   try {
  //     authenticateUser();
  //     console.log(id)
  //     const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/myprofile/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  //     setCurrentUser(response.data);
  //     setIsLoading(false);
  //     console.log("response.data:", response.data)
  //     console.log("response.data.isTransportist:", response.data.isTransportist)
  //     if (response.data.isTransportist) {
  //       setIsTransportist(true)
  //     }
  //     // navigate(`/profile/myprofile/${id}`); // Navigate to the profile page after setting the currentUser state variable
  //   } catch (err) {
  //     console.log("error del catch del getCurrentUser:", err);
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateValues = {
      phoneNumber: formValues.phoneNumber,
      address: formValues.address,
      password: formValues.password,
      repeatPassword: formValues.repeatPassword,
      image: image,
      licensePlate: formValues.licensePlate,
      nif: formValues.nif,
      professionalType: formValues.professionalType
    };
    const profileService = new ProfileService();
    profileService
      .editProfile(user._id, updateValues)
      .then((response) => {
        setFormValues({
          phoneNumber: 0,
          address: "",
          password: "",
          repeatPassword: "",
          licensePlate: "",
          nif: "",
          professionalType: ""
        });
        setImage("");
        // setIsLoading(false)
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleDelete = () => {
  //   const profileService = new ProfileService();
  //   profileService
  //     .deleteProfile(user._id)
  //     .then(() => {
  //       authenticateUser(null);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log("console.log del delete:", error);
  //     });
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <div> 
            {/* <Button variant="danger" onClick={handleDelete}>Delete Profile</Button> */}
       <form onSubmit={handleSubmit}>

    <br>
    </br>
    <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Profile image</label>
        <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Insert your license plate here" name="image"  onChange={(e) => handleFileUpload(e)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
        <input type="number" className="form-control" value={formValues.phoneNumber} id="exampleFormControlInput1"  name="phoneNumber" onChange={handleInputChange} placeholder="Insert your phone number here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
        <input type="text" className="form-control" value={formValues.address} id="exampleFormControlInput1"  name="address" onChange={handleInputChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" 
       value={formValues.password} id="exampleFormControlInput1"  name="password" placeholder="Insert password here" onChange={handleInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Repeat Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Insert password again" name="repeatPassword"  value={formValues.repeatPassword} onChange={handleInputChange} />
      </div>
     

      {/* {isLoggedIn &&
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">License Plate</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Insert your license plate here" name="editLicensePlate"  onChange={handleInputChange} />
      </div>
      } */}
      <button className="learn-more" type="submit">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>

          <span className="button-text">Submit changes</span>
        </button>

      </form>
    </div>
    </>
  );
}

export default EditProfileForm;