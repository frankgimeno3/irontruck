import axios from "axios";
// import { authContext } from "../context/auth.context";
class ShipmentsService {
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
    getShipments() {
        return axios.get(process.env.REACT_APP_SERVER_URL + "/api/shipment", this.headerObject);
    }
    getShipmentById(idShipment) {
        return axios.get(process.env.REACT_APP_SERVER_URL + `/api/shipment/${idShipment}`, this.headerObject);
    }
    addShipments(shipment) {
        return axios.post(process.env.REACT_APP_SERVER_URL + "/api/shipment/new", shipment, this.headerObject);
    }
    editShipments(shipmentId, shipment) {
        return axios.put(process.env.REACT_APP_SERVER_URL + `/api/shipment/edit/${shipmentId}`, shipment, this.headerObject);
    }
    deleteShipments(shipmentId) {
        return axios.delete(process.env.REACT_APP_SERVER_URL + `/api/shipment/delete/${shipmentId}`, this.headerObject);
    }
}
export default ShipmentsService;
