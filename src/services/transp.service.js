import axios from "axios";

class TranspService {
    constructor() {
        this.api = axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL,
        });

        this.api.interceptors.request.use((config) => {
        const storedToken = localStorage.getItem("authToken");

        if (storedToken) {
            config.headers = { Authorization: `Bearer ${storedToken}` };
        }
        return config;
        });
    }
  login (requestBody) {
    return this.api.post("/transportist/login", requestBody);
     };
  signup (requestBody) {
    return this.api.post("/transportist/signup", requestBody);
      };
  verify () {
    return this.api.get("/transportist/verify");
   };
}

const transpService = new TranspService();
export default transpService;
