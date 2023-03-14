import React, { useState, useEffect } from "react";
import ShipmentsService from "../../../services/shipments.service";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';


function Rejected () {
  const [shipments, setShipments] = useState([]);
  useEffect(() => {
    const shipmentsService = new ShipmentsService("your-token-here");
    shipmentsService
      .getShipments()
      .then((response) => {
        setShipments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div >
      <h2>Rejected Shipments</h2>
      {shipments.map((shipment) => (
        <div key={shipment._id} className="card">
          <div className="shipment-info">
            {/* <p>{shipment.author.name}</p> */}
            {/* <p>{shipment.author.email}</p> */}
            <p>Creation Date: {shipment.creationDate}</p>
            <p>Shipment pallets: {shipment.pallets}</p>
            {/* other shipment data */}
          </div>
          <div className="shipment-address">
            <div className="pickup-address">
              <p>Pick up direction: {shipment.pickUpDireccion}</p>
              <p>Pick up province: {shipment.pickUpProvince}</p>
            </div>
            <div className="delivery-address">
              <p>Delivery direction: {shipment.deliveryDireccion}</p>
              <p>Delivery province: {shipment.deliveryProvince}</p>
            </div>
          </div>
          <Link to={`/shipments/${shipment._id}`}>
          {/* <Route path="/:idShipment" component={ShipmentDetails} /> */}
            <button className="detailsbutton">See Details</button>
          </Link>

        </div>
      ))}    </div>
  );
};

export default Rejected;