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
  const [isTransportist, setIsTransportist] = useState(false)

  const getCurrentUser = async (id) => {
    try {
      authenticateUser();
      console.log(id)
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/profile/myprofile/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } })
      setCurrentUser(response.data);
      setIsLoading(false);
      if (response.data.isTransportist) {
        setIsTransportist(true)
      }
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
      {!isLoading && isLoggedIn && !isTransportist &&
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
          <section>
            <h2>Edit your profile data </h2>
            <ProfileDataForm />
          </section>
        </div>
      }
    </>
  );
}

export default MyProfilePage;








    //       <section style="background-color: #eee;">
    // //       <div className='container py-5'>
    // //         <div className='row'>
    // //           <div className='col-lg-4'>
    // //             <div className='card mb-4'>
    // //               <div className='card-body text-center'>
    // //                 <img src={currentUser.image} alt="profile-image" className='rounded-circle img-fluid' style="width: 150px" />
    // //                 <h5 className='my-3'>{currentUser.name}</h5>
    // //                 <p className='text-muted mb-1'>{currentUser.email}</p>
    // //               </div>
    // //             </div>
    // //           </div>
    // //         </div>
    // //         <ProfileDataForm />
    // //       </div>
    // //     </section>