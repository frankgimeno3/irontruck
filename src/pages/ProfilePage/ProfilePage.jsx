/* eslint-disable */

import React from 'react';
import "./ProfilePage.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../../context/auth.context"

function ProfilePage() {

  let { id } = useParams();
  const { getToken } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null)

  const getCurrentUser = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } })
      setCurrentUser(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log("error del catch del getCurrentUser:", err);
    }
  }

  useEffect(() => {
    getCurrentUser(id);


  }, []);



  return (
    <>
      {!isLoading &&
        <div>
          <h1>Profile page</h1>
          <p className="card-text">{currentUser.name}</p>
          <p className="card-text">{currentUser.email}</p>
          <img src={currentUser.image} alt="profile image" />
        </div>}
    </>
  );
}

export default ProfilePage;
