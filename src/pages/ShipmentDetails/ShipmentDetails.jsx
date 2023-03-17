import React, { useState, useEffect, useContext } from "react";
import "./ShipmentDetails.css"
import ShipmentsService from "../../services/shipments.service.js";
import ProfileService from "../../services/profile.service.js";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.jsx";
import "../../pages/MyCargos/MyCargos.css";
import SenderChatComponent from "../../components/Chat/SenderChatComponent";
import DriverChatComponent from "../../components/Chat/DriverChatComponent";
import { Link } from "react-router-dom";
import TransportistCard from "../../components/Transportists/TransportistsCard";
import "./ShipmentDetails.css";


function ShipmentDetails() {
  const { id } = useParams();
  const [shipment, setShipment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {  isTransportist,  user } =
    useContext(AuthContext);
  const profileService = new ProfileService();
  const shipmentsService = new ShipmentsService();
  useEffect(() => {
    shipmentsService
      .getShipmentById(id)

      .then((response) => {
        setShipment(response.data);
        setIsLoading(!isLoading);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const startNegotiation = () => {
    shipmentsService
      .editShipments(shipment._id, {
        state: "inNegotiation",
        $push: { transportist: user._id },
      })
      .then((response) => {
        setShipment(response.data);
        profileService
          .editProfile(user._id, {
            $push: {
              currentShipments: response.data._id,
            },
          })
          .then((response) => { })
          .catch((error) => {
            console.error("Failed to update Transportist", error);
          });
      })
      .catch((error) => {
        console.error("Failed to update shipment state", error);
      });
  };
  const deleteShipment = () => {
    shipmentsService
      .deleteShipments(shipment._id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Failed to delete shipment ", error);
      });
  };
  const acceptShipment = () => {
    shipmentsService
      .editShipments(shipment._id, {
        state: "Completed",
        $push: { transportist: user._id },
      })
      .then((response) => {
        setShipment(response.data);
        profileService
          .editProfile(user._id, {
            $push: {
              currentShipments: response.data._id,
            },
          })
          .then((response) => { })
          .catch((error) => {
            console.error("Failed to update Transportist", error);
          });
      })
      .catch((error) => {
        console.error("Failed to update shipment state", error);
      });
  };
  const shipmenttransportists = shipment.transportists;

  return (

    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <ul class="list-group list-group-flush">
            <li class="list-group-item font-weight-bold h4">Shipping Details</li>
            <li class="list-group-item">Shipment id: <span class="font-weight-bold">{shipment._id}</span></li>
            <li class="list-group-item">Author: <span class="font-weight-bold">{shipment.author?.name}</span></li>
            <li class="list-group-item">Creation Date: <span class="font-weight-bold">{shipment.creationDate}</span></li>
            <li class="list-group-item">Pickup address: <span class="font-weight-bold">{shipment.pickUpDireccion}</span></li>
            <li class="list-group-item">PickUp Province: <span class="font-weight-bold">{shipment.pickUpProvince}</span></li>
            <li class="list-group-item">Delivery address: <span class="font-weight-bold">{shipment.deliveryDireccion}</span></li>
            <li class="list-group-item">Delivery Province: <span class="font-weight-bold">{shipment.deliveryProvince}</span></li>
            <li class="list-group-item">Number of pallets: <span class="font-weight-bold">{shipment.pallets}</span></li>
            <li class="list-group-item">State: <span class="font-weight-bold">{shipment.state}</span></li>
            <li class="list-group-item">
              {isLoading &&
                <a href={`/profile/${shipment.author._id}`}>
                  <button class="btn btn-info">See Sender Details</button>
                </a>
              }
              {isTransportist && (
                <button class="btn btn-primary btn-lg" onClick={startNegotiation}>
                  Negotiate Shipment
                </button>
              )}
              {!isTransportist && (
                <SenderChatComponent class="mt-5" />
              )}
              {isTransportist && (
                <DriverChatComponent class="mt-5" />
              )}
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <TransportistCard class="mt-10" />
        </div>
      </div>
    </div>



  );
}
export default ShipmentDetails;



