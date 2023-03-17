import React, { useState, useEffect, useContext, useMemo } from "react";
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
  const { isTransportist,  user } =
    useContext(AuthContext);
  const profileService = new ProfileService();
  const shipmentsService = useMemo(() => {
    return new ShipmentsService();
  }, []);  useEffect(() => {
    shipmentsService
      .getShipmentById(id)

      .then((response) => {
        setShipment(response.data);
        setIsLoading(!isLoading);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, isLoading, shipmentsService]);
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
          .then((response) => {})
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
          .then((response) => {})
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
          {isLoading && (
            <Link to={`/profile/${shipment.author._id}`}>
              <button className="detailsbutton">See Sender Details</button>
            </Link>
          )}
        </div>
        
        <div className="container2">
          {!isTransportist && <TransportistCard shipment={shipmenttransportists}  />}
          
          {!isTransportist && <SenderChatComponent />}
          {isTransportist && <DriverChatComponent />}
        </div>
        </div>
        <div className="container1">
        {isTransportist && (
          <button className="btn btn-primary" onClick={startNegotiation}>
            Negotiate Shipment
          </button>
        )}
        {!isTransportist && (
          <button className="btn btn-danger" onClick={deleteShipment}>
            Delete Shipment
          </button>
        )}
      
      {!isTransportist && (
          <button className="btn btn-success" onClick={acceptShipment}>
            Accept Shipment
          </button>
        )}
      </div>
    </>
  );
}
export default ShipmentDetails;
