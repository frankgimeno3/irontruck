import React from 'react';
import ProfileDataTransportist from '../../components/ProfileDataTransportist/ProfileDataTransportist';
import "./ProfilePage.css";
 import { useContext, useEffect, useState } from "react";
 import { AuthContext } from "../../context/auth.context"

 
function ProfilePage() {

  const {user, authenticateUser} = useContext(AuthContext);

  useEffect(() => {
    authenticateUser();
    }, []);

  return (
    <div>
      <h1>Profile page</h1>
      <h2>Name:</h2>
      <p className="card-text">{user.name}</p>
      <h2>Email:</h2>
      <p className="card-text">{user.email}</p>
      <p className="card-text">{user.imageUrl}</p>
      <img src="https://www.pronto.es/files/main_image/uploads/2022/10/19/634ff6276d78d.jpeg" alt="userImage" />
      <section>
      <h2>Edit your profile data </h2>
      <ProfileDataTransportist />
      </section>
    </div>
  );
}

export default ProfilePage;
