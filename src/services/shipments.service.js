import service from "./service";

const URL = "/shipments"

const shipmentsService = (requestBody) => {
    return service.get(`${URL}`, requestBody)
}

const addShipmentsService = (shipment, requestBody) => {
    return service.post(`${URL}/new`, shipment, requestBody)
}

const editShipmentsService = (shipmentId, shipment, requestBody) => {
    return service.put(`${URL}/edit/${shipmentId}`, shipment, requestBody);

}

const deleteShipmentsService = (shipmentId, requestBody) => {
    return service.post(`${URL}/delete/${shipmentId}`, requestBody)
}

export {shipmentsService, addShipmentsService, editShipmentsService, deleteShipmentsService};



// class ShipmentsService {
//     constructor(token) {
//         this.headerObject = {headers: {authorization: `Bearer ${token}`}}
//     }
//     getShipments() {
//         return axios.get(process.env.REACT_APP_API_URL+"/shipments", this.headerObject);
//     }
//     addShipments(shipment) {
//         return axios.post(process.env.REACT_APP_API_URL+"/shipments/new", shipment, this.headerObject);
//     }
//     editShipments(shipmentId, shipment) {
//         return axios.put(process.env.REACT_APP_API_URL+`/shipments/edit/${shipmentId}`, shipment, this.headerObject);

//     }
//     deleteShipments(shipmentId) {
//         return axios.delete(process.env.REACT_APP_API_URL+`/shipments/delete/${shipmentId}`, this.headerObject);
//     }
// }

// export default ShipmentsService;
