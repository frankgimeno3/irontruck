import axios from "axios";

class ProfileService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
        });

        // Create header object with JWT token
        const storedToken = localStorage.getItem("authToken");
        this.headerObject = storedToken
            ? { headers: { Authorization: `Bearer ${storedToken}` } }
            : {};
    }

    getProfile(id) {
        return this.api.get(`/profile/myprofile/${id}`, this.headerObject);
    }

    getotherProfile(id) {
        return this.api.get(`/profile/${id}`, this.headerObject);
    }

    editProfile(id, profile) {
        return this.api.put(`/profile/myprofile/${id}`, profile, this.headerObject);
    }
    deleteProfile(id) {
        return this.api.delete(process.env.REACT_APP_SERVER_URL+`profile/myprofile/${id}`, this.headerObject);
    }

}

export default ProfileService;