/* eslint-disable */

import React from "react";
import ProfileDataForm from "../../components/ProfileDataForm/ProfileDataForm";
import "./MyProfilePage.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyProfilePage() {
  const navigate = useNavigate();

  const { user, authenticateUser, isLoggedIn, getToken } =
    useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isTransportist, setIsTransportist] = useState(false);

  const getCurrentUser = async (id) => {
    try {
      authenticateUser();
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/profile/myprofile/${id}`,
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      setCurrentUser(response.data);
      setIsLoading(false);

      if (response.data.isTransportist) {
        setIsTransportist(true);
      }
      // navigate(`/profile/myprofile/${id}`); // Navigate to the profile page after setting the currentUser state variable
    } catch (err) {
      console.log("error del catch del getCurrentUser:", err);
    }
  };
  useEffect(() => {
    getCurrentUser(user._id);
  }, []);

  return (
    <>
      {!isLoading && isLoggedIn && !isTransportist && (
        <div>
          <div className="profile-container profile-py-5">
            <div className="profile-col-lg-4">
              <div className="profile-card profile-mb-4">
                <div className="profile-card-body profile-text-center">
                  <img src={currentUser.image} alt="profile image" />
                </div>
              </div>
              <div className="profile-col-lg-8">
                <div className="profile-card profile-mb-4">
                  <div className="profile-card-body">
                    <div className="profile-row">
                      <div className="profile-col-sm-3">
                        <p className="profile-mb-0">Name</p>
                      </div>
                      <div className="profile-col-sm-9">
                        <p className="profile-text-muted profile-mb-0">
                          {currentUser.name}
                        </p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="profile-row">
                      <div className="profile-col-sm-3">
                        <p className="profile-mb-0">Email</p>
                      </div>
                      <div className="profile-col-sm-9">
                        <p className="profile-text-muted profile-mb-0">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="profile-row">
                      <div className="profile-col-sm-3">
                        <p className="profile-mb-0">Address</p>
                      </div>
                      <div className="profile-col-sm-9">
                        <p className="profile-text-muted profile-mb-0">
                          {currentUser.address}
                        </p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="profile-row">
                      <div className="profile-col-sm-3">
                        <p className="profile-mb-0">Phone Number</p>
                      </div>
                      <div className="profile-col-sm-9">
                        <p className="profile-text-muted profile-mb-0">
                          {currentUser.phoneNumber}
                        </p>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <h2>Edit your profile data </h2>
            <ProfileDataForm />
          </section>
        </div>
      )}
      {!isLoading && isLoggedIn && isTransportist && (
          <div className="container1">
            <div className="container2">
              <div className="container3">
                <div className="container4">
                  <img src={currentUser.image} alt="profile image" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="container3">
                  <div className="container4">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="container5">Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="container6">{currentUser.name}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="container5">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="container6">{currentUser.email}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="container5">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="container6">{currentUser.address}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="container5">Phone Number</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="container6">{currentUser.phoneNumber}</p>
                      </div>
                    </div>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
          <section>
            <h2>Edit your profile data </h2>
            <ProfileDataForm />
          </section>
        </div>
      )}
    </>
  );
}

export default MyProfilePage;
