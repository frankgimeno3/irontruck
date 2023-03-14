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
    return this.api.get(`/profile/${id}`, this.headerObject);
  }
  editProfile(id, profile) {
    return this.api.put(`/profile/${id}`, profile, this.headerObject);
  }
}
export default ProfileService;
