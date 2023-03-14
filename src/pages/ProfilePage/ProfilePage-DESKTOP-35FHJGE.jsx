import React from 'react';
import ProfileDataTransportist from '../../components/ProfileDataTransportist/ProfileDataTransportist';
import "./ProfilePage.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context"
import axios from "axios";


function ProfilePage() {

  const { user, authenticateUser, isLoggedIn } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null)

  const getCurrentUser = async (id) => {
    try {
      authenticateUser();
      // console.log(id)
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/${id}`)
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
          <p className="card-text">{currentUser.imageUrl}</p>
          <section>
            <h2>Edit your profile data </h2>
            <ProfileDataTransportist />
          </section>
        </div>}
    </>
  );
}

export default ProfilePage;
