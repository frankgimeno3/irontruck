import React, { useState, useEffect, useContext } from "react";
import ShipmentsService from "../../services/shipments.service.js";
import ProfileService from "../../services/profile.service.js";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.jsx";
import "../../pages/MyCargos/MyCargos.css";
import SenderChatComponent from "../../components/Chat/SenderChatComponent"
import DriverChatComponent from "../../components/Chat/DriverChatComponent"
import { Link, useNavigate } from "react-router-dom";
import TransportistCard from "../../components/Transportists/TransportistsCard"
import "./ShipmentDetails.css"

function ShipmentDetails() {
  const { id } = useParams();
  const [shipment, setShipment] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { authenticateUser, isTransportist, getToken, user, isLoggedIn } = useContext(AuthContext);
  const profileService = new ProfileService();
  const shipmentsService = new ShipmentsService();
  useEffect(() => {
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
  const startNegotiation = () => {
    shipmentsService
      .editShipments(shipment._id, { state: "inNegotiation", $push: { transportist: user._id } })
      .then((response) => {
        setShipment(response.data)
        profileService.editProfile(user._id, {
          $push: {
            currentShipments: response.data._id
          }
        })
          .then((response) => {
          })
          .catch((error) => {
            console.error("Failed to update Transportist", error);
          })
      })
      .catch((error) => {
        console.error("Failed to update shipment state", error);
      });
  }
  const deleteShipment = () => {
    shipmentsService
      .deleteShipments(shipment._id)
      .then((response) => {
          console.log(response)
      })
      .catch((error) => {
        console.error("Failed to delete shipment ", error);
      });
  }
  return (
    <>
    <h1>Shipping Details</h1>
    <div className="container1">
      <div className="container2">
        <p>Shipment id: {shipment._id}</p>
        <p>Author: {shipment.author?.name}</p>
        <p>Creation Date: {shipment.creationDate}</p>
        <p>Pickup address: {shipment.pickUpDireccion}</p>
        <p>PickUp Province: {shipment.pickUpProvince}</p>
        <p>Delivery address: {shipment.deliveryDireccion}</p>
        <p>Delivery Province: {shipment.deliveryProvince}</p>
        <p>Number of pallets: {shipment.pallets}</p>
        <p>State: {shipment.state}</p>
      {isLoading &&
        <Link to={`/profile/${shipment.author._id}`}>
          <button className="detailsbutton">See Sender Details</button>
        </Link>
      }
      {!isLoading && isTransportist && (
        <button className="btn btn-primary" onClick={startNegotiation}>
          Negotiate Shipment
        </button>
      )}
      </div>
      <div className="container2">

      <TransportistCard shipment={shipment._id} />
      {!isTransportist && (
        < SenderChatComponent />
      )}
      {isTransportist && (
        < DriverChatComponent />
      )}
      </div>
      {!isTransportist && (
        <button className="btn btn-danger" onClick={deleteShipment}>
          Delete Shipment
        </button>
      )}
    </div>
    </>

  );
}
export default ShipmentDetails;