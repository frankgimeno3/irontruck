import React, { useState, useContext } from "react";
import './ProfileDataForm.css';
import ProfileService from "../../services/profile.service";
import { AuthContext } from "../../context/auth.context"
import service from "../../services/upload.service"


function EditProfileForm() {

  const { user, authenticateUser, isLoggedIn, getToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
      phoneNumber: 0,
      address: "",
      password: "",
      repeatPassword: ""
    });
    const [image, setImage] = useState("");

   // ******** this method handles the file upload ********
   const handleFileUpload = (e) => {
 
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log(response);
        setImage(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      const updateValues = {
        phoneNumber: formValues.phoneNumber,
        address: formValues.address,
        password: formValues.password,
        repeatPassword: formValues.repeatPassword,
        image: image,
      };
      const profileService = new ProfileService(getToken());
      profileService
        .editProfile(user._id, updateValues)
        .then((response) => {
          console.log("response.data:", response.data);
          setFormValues({
            phoneNumber: 0,
            address: "",
            password: "",
            repeatPassword: ""
  
          });
          setImage("");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormValues((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Phone number</label>
        <input type="number" className="form-control" value={formValues.phoneNumber} id="exampleFormControlInput1"  name="phoneNumber" onChange={handleInputChange} placeholder="Insert your phone number here" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
        <input type="text" className="form-control" value={formValues.address} id="exampleFormControlInput1"  name="address" onChange={handleInputChange}
 placeholder="Insert your phone number here" />
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
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Profile image</label>
        <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Insert your license plate here" name="image"  onChange={(e) => handleFileUpload(e)} value={formValues.image} />
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
  );
}

export default EditProfileForm;