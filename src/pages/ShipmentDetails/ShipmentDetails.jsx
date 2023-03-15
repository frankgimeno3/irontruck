import React, { useState, useEffect } from "react";
import ShipmentsService from "../../services/shipments.service";
import { useParams } from "react-router-dom";
import "../../pages/MyCargos/MyCargos.css";
import SenderChatComponent from "../../components/Chat/SenderChatComponent"
import DriverChatComponent from "../../components/Chat/DriverChatComponent"
import OffersReceivedComponent from "../../components/OffersReceivedComponent/OffersReceivedComponent"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function ShipmentDetails() {
  const { id } = useParams();
  const [shipment, setShipment] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  console.log(id);
  const { user, authenticateUser, isTransportist, getToken } = useContext(AuthContext);

  useEffect(() => {
    const shipmentsService = new ShipmentsService("your-token-here");
    shipmentsService
      .getShipmentById(id)

      .then((response) => {
        setShipment(response.data);
        setIsLoading(!isLoading)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  return (
    <div>
      <h1>Shipping Details</h1>
      <p>Shipment id: {shipment._id}</p>
      <p>Author: {shipment.author?.name}</p>
      <p>Creation Date: {shipment.creationDate}</p>
      <p>Pickup address: {shipment.pickUpAddress}</p>
      <p>PickUp Province: {shipment.pickUpProvince}</p>
      <p>Delivery address: {shipment.deliveryAddress}</p>
      <p>Delivery Province: {shipment.deliveryProvince}</p>
      <p>Number of pallets: {shipment.pallets}</p>

      <button className="button" >Save Shipment</button>
      <button className="button" >Start Negotiating</button>

      <hr />
      <h2>Offers Received</h2>
      <OffersReceivedComponent />
      <hr/>
      {!isLoading && !isTransportist && (
      < SenderChatComponent />
      )}

      {!isLoading && isTransportist && (
      < DriverChatComponent />
      )}
      </div>
      
  );
}
export default ShipmentDetails;