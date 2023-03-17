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
        <div className='container py-5'>
        <div className='col-lg-4'>
          <div className='card mb-4'>
            <div className='card-body text-center'>
              <img src={currentUser.image} alt="profile image" />
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Name</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{currentUser.name}</p>
                  </div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Email</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{currentUser.email}</p>
                  </div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Address</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{currentUser.address}</p>
                  </div>
                </div>
                <hr></hr>
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Phone Number</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{currentUser.phoneNumber}</p>
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}

export default ProfilePage;
