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
      <p className="card-text">{user.name}</p>
      <p className="card-text">{user.email}</p>
      <p className="card-text">{user.imageUrl}</p>
      <section>
      <h2>Edit your profile data </h2>
      <ProfileDataTransportist />
      </section>
    </div>
  );
}

export default ProfilePage;
