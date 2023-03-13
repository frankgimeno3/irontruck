import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { useParams } from "react-router-dom";

const ShipmentDetails = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState({});
  console.log(id);


  useEffect(() => {
    const shipmentsService = new ShipmentsService("your-token-here");
    shipmentsService
      .getShipmentById(id)
      .then((response) => {
        setShipment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


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

      <button>deletion</button>
    </div>
  );
  }
export default ShipmentDetails;