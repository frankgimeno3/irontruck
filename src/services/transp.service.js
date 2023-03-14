import service from "./service";

const URL = "/transportist"

const signupTransportistService = (requestBody) => {
    return service.post(`${URL}/signup`, requestBody);
}

const loginTransportistService = (requestBody) => {
    return service.post(`${URL}/login`, requestBody);
}

const verifyTransportistService = () => {
    return service.post(`${URL}/verify`, requestBody);

}
// class TranspService {
//     constructor() {
//         this.api = axios.create({
//             baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
//         });

//         // Automatically set JWT token on the request headers for every request
//         this.api.interceptors.request.use((config) => {
//             // Retrieve the JWT token from the local storage
//             const storedToken = localStorage.getItem("authToken");

//             if (storedToken) {
//                 config.headers = { Authorization: `Bearer ${storedToken}` };
//             }

//             return config;
//         });
//     }

//     login = (requestBody) => {
//         return this.api.post("/transportist/login", requestBody);
//         // same as
//         // return axios.post("http://localhost:5005/auth/login");
//     };

//     signup = (requestBody) => {
//         return this.api.post("/transportist/signup", requestBody);
//         // same as
//         // return axios.post("http://localhost:5005/transportist/singup");
//     };

//     verify = () => {
//         return this.api.get("/transportist/verify");
//         // same as
//         // return axios.post("http://localhost:5005/transportist/verify");
//     };
// }

// // Create one instance (object) of the service
// const transpService = new TranspService();

// export default transpService;
