import axios from "axios";
// import { authContext } from "../context/auth.context";

class ShipmentsService {
    constructor(token) {
        this.headerObject = {headers: {authorization: `Bearer ${token}`}}
    }
    get() {
        return axios.get(process.env.REACT_APP_SERVER_URL+"/api/profile", this.headerObject);
    }
}