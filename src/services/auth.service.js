import service from "./service";

const URL = "/auth"

const signupService = (requestBody) => {
  return service.post(`${URL}/signup`, requestBody)
}

const loginService = (requestBody) => {
  return service.post(`${URL}/login`, requestBody)
}

const verifyService = (requestBody) => {
  return service.post(`${URL}/verify`, requestBody)
}

export { signupService, loginService, verifyService};

// class AuthService {
//   constructor() {
//     this.api = axios.create({
//       baseURL: process.env.REACT_APP_SERVER_URL,
//     });

//     // Automatically set JWT token on the request headers for every request
//     this.api.interceptors.request.use((config) => {
//       // Retrieve the JWT token from the local storage
//       const storedToken = localStorage.getItem("authToken");

//       if (storedToken) {
//         config.headers = { Authorization: `Bearer ${storedToken}` };
//       }

//       return config;
//     });
//   }

//   login = (requestBody) => {
//     return this.api.post("/auth/login", requestBody);
//     // same as
//     // return axios.post("http://localhost:5005/auth/login");
//   };

//   signup = (requestBody) => {
//     return this.api.post("/auth/signup", requestBody);
//     // same as
//     // return axios.post("http://localhost:5005/auth/singup");
//   };

//   verify = () => {
//     return this.api.get("/auth/verify");
//     // same as
//     // return axios.post("http://localhost:5005/auth/verify");
//   };
// }

// // Create one instance (object) of the service
// const authService = new AuthService();

// export default authService;
