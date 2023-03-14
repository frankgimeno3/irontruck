import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { Link } from "react-router-dom";
import "./CargoExchange.css";

function CargoExchange() {
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

    <div>
      <h1>Shipments List</h1>
      {shipments.map((shipment) => (
        <div key={shipment._id} className="card">
          <h2 className="card-header">
            Shipment {shipment.pickUpProvince} to {shipment.deliveryProvince}
          </h2>
          <div className="card-body">
            {/* <p>{shipment.author.name}</p> */}
            {/* <p>{shipment.author.email}</p> */}
            {/* <p>Creation Date: {shipment.creationDate}</p> */}
            <h5 className="card title">Number of Pallets</h5>
            <p> {shipment.pallets}</p>
            {/* other shipment data */}
          </div>
          <div className="shipment-address">

            <div className="pickup-address">
              <h5> Datos de Recogida</h5>
              <p> {shipment.pickUpDireccion}, {shipment.pickUpProvince}</p>

            </div>

            <div className="delivery-address">
              <h5> Datos de Entrega</h5>
              <p>{shipment.deliveryDireccion}, {shipment.deliveryProvince}</p>

            </div>
          </div>
          <div className="card-footer">
            <Link to={`/api/${shipment._id}`}>
              <button className="btn btn-primary">Ver Detalles</button>
            </Link>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      ))}
    </div>


  );
}

export default CargoExchange;