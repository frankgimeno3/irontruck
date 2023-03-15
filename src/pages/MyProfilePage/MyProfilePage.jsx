import React from 'react';
import ProfileDataForm from '../../components/ProfileDataForm/ProfileDataForm';
import "./MyProfilePage.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context"
import axios from "axios";

function MyProfilePage() {

  const { user, authenticateUser, isLoggedIn, getToken } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null)

  const getCurrentUser = async (id) => {
    try {
      authenticateUser();
      console.log(id)
       const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/myprofile/${id}`, {headers: {Authorization:`Bearer ${getToken()}`}})
      setCurrentUser(response.data);
      setIsLoading(false);
    } catch (err) { 
      console.log("error del catch del getCurrentUser:", err);
    }
  }

  useEffect(() => {
    getCurrentUser(user._id);

    // axios
    //   .get(`${process.env.REACT_APP_SERVER_URL}/profile/${user._id}`)
    //   .then((response) => {

    //   })
    //   .catch((err)=> console.log("error en el catch de profilepage", err))
  }, []);

  return (
    <>
      {!isLoading && isLoggedIn &&
        <div>
          <h1>Profile page</h1>
          <p className="card-text">{currentUser.name}</p>
          <p className="card-text">{currentUser.email}</p>
          <img src={currentUser.image} alt="profile image"/>
          <section>
            <h2>Edit your profile data </h2>
            <ProfileDataForm />
          </section>
        </div>}
    </>
  );
}

export default MyProfilePage;
