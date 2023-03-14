import axios from "axios";
// import { authContext } from "../context/auth.context";
class ProfileService {
    constructor() {
      this.api = axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
      });
  
      // Automatically set JWT token in the headers for every request
      this.api.interceptors.request.use((config) => {
        // Retrieve the JWT token from the local storage
        const storedToken = localStorage.getItem("authToken");
  
        if (storedToken) {
          config.headers = { Authorization: `Bearer ${storedToken}` };
        }
  
        return config;
      });
    }
    get(id) {
        return axios.get(process.env.REACT_APP_SERVER_URL+"/profile/" + id, this.headerObject);
    }
    put(id, profile) {
        return axios.put(process.env.REACT_APP_SERVER_URL +`/profile/${id}`, profile, this.headerObject);

    }
}
export default ProfileService;