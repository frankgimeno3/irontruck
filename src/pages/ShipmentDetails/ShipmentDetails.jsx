import React, { useState, useEffect } from "react";
import axios from "axios";

const ShipmentDetails = (props) => {
  const [shipment, setShipment] = useState({});

  useEffect(() => {
    const { idShipment } = props.match.params;
    axios
      .get(`/api/Shipment/${idShipment}`)
      .then((response) => {
        setShipment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Detalles del envío</h1>
      <p>Id del envío: {shipment._id}</p>
      <p>Autor: {shipment.author}</p>
      <p>Fecha de creación: {shipment.creationDate}</p>
      <p>Dirección de recogida: {shipment.pickUpDireccion}</p>
      <p>Provincia de recogida: {shipment.pickUpProvince}</p>
      <p>Dirección de entrega: {shipment.deliveryDireccion}</p>
      <p>Provincia de entrega: {shipment.deliveryProvince}</p>
      <p>Número de pallets: {shipment.pallets}</p>
    </div>
  );
};

export default ShipmentDetails;