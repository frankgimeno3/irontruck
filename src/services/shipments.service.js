import axios from "axios";
// import { authContext } from "../context/auth.context";
class ShipmentsService {
    constructor(token) {
        this.headerObject = { headers: { authorization: `Bearer ${token}` } }
    }
    getShipments() {
        return axios.get(process.env.REACT_APP_SERVER_URL + "/api/shipment", this.headerObject);
    }
    getShipmentById(shipmentId) {
        return axios.get(process.env.REACT_APP_SERVER_URL + `/api/shipment/${shipmentId}`, this.headerObject);
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
