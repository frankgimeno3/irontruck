import React, { useState, useContext } from "react";
import './ProfileDataDelete.css';
import ProfileService from "../../services/profile.service";
import { AuthContext } from "../../context/auth.context"
import service from "../../services/upload.service"

function DeleteProfileForm (){

    const { user, authenticateUser, isLoggedIn, getToken } = useContext(AuthContext);


}