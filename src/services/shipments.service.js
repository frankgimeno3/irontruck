import axios from "axios";

class ShipmentsService {
    constructor(token) {
        this.headerObject = {headers: {authorization: `Bearer ${token}`}}
    }
    getShipments() {
        return axios.get(process.env.REACT_APP_API_URL+"/shipments", this.headerObject);
    }
    addShipments(shipment) {
        return axios.post(process.env.REACT_APP_API_URL+"/shipments/new", shipment, this.headerObject);
    }
    editShipments(shipmentId, shipment) {
        return axios.put(process.env.REACT_APP_API_URL+`/shipments/edit/${shipmentId}`, shipment, this.headerObject);

    }
    deleteShipments(shipmentId) {
        return axios.delete(process.env.REACT_APP_API_URL+`/shipments/delete/${shipmentId}`, this.headerObject);
    }
}

export default ShipmentsService;
