import React, { useState, useEffect, useContext } from "react";
import ShipmentsService from "../../services/shipments.service.js";
import ProfileService from "../../services/profile.service.js";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.jsx";
import "../../pages/MyCargos/MyCargos.css";
import Chat from "../../components/Chat/Chat"
import OffersReceivedComponent from "../../components/OffersReceivedComponent/OffersReceivedComponent"


function ShipmentDetails() {
  const { user, isLoggedIn, isLoading } = useContext(AuthContext);
  const { id } = useParams();
  const [shipment, setShipment] = useState({});
  console.log(id);
  const profileService = new ProfileService();
  const shipmentsService = new ShipmentsService();

  useEffect(() => {
    shipmentsService
      .getShipmentById(id)

      .then((response) => {
        console.log("console.log del response:", response)
        setShipment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const startNegotiation = () => {
    shipmentsService
      .editShipments(shipment._id, { state: "inNegotiation", $push: { transportist: user._id } })
      .then((response) => {
        setShipment(response.data)
        profileService.editProfile(user._id, { $push: { currentShipments: response.data._id } })
        // .then((response) => {
        //   console.log(response.data)
        // })
        // .catch((error) => {
        //   console.error("Failed to update Transportist state", error);
        // })
      })
      .catch((error) => {
        console.error("Failed to update shipment state", error);
      });
  }


  return (
    <div>
      <h1>Shipping Details</h1>
      <p>Shipment id: {shipment._id}</p>
      {/* <p>Author: {shipment.author.name}</p> */}
      <p>Creation Date: {shipment.creationDate}</p>
      <p>Pickup address: {shipment.pickUpDireccion}</p>
      <p>PickUp Province: {shipment.pickUpProvince}</p>
      <p>Delivery address: {shipment.deliveryDireccion}</p>
      <p>Delivery Province: {shipment.deliveryProvince}</p>
      <p>Number of pallets: {shipment.pallets}</p>
      <p>State: {shipment.state}</p>

      <button className="button" >Save Shipment</button>
      <button className="button" >Start Negotiating</button>


      {/* {shipment.transportists.includes(user._id) ? ( */}

      <button className="btn btn-primary" onClick={startNegotiation}>
        Negotiate Shipment
      </button>
      {/* ) : null} */}

      <Chat />
    </div>

  );
}
export default ShipmentDetails;