/* eslint-disable */
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
  const { isTransportist, user } =
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

  return (

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group list-group-flush">
            <li className="list-group-item font-weight-bold h4">Shipping Details</li>
            <li className="list-group-item">Shipment id: <span className="font-weight-bold">{shipment._id}</span></li>
            <li className="list-group-item">Author: <span className="font-weight-bold">{shipment.author?.name}</span></li>
            <li className="list-group-item">Creation Date: <span className="font-weight-bold">{shipment.creationDate}</span></li>
            <li className="list-group-item">Pickup address: <span className="font-weight-bold">{shipment.pickUpDireccion}</span></li>
            <li className="list-group-item">PickUp Province: <span className="font-weight-bold">{shipment.pickUpProvince}</span></li>
            <li className="list-group-item">Delivery address: <span className="font-weight-bold">{shipment.deliveryDireccion}</span></li>
            <li className="list-group-item">Delivery Province: <span className="font-weight-bold">{shipment.deliveryProvince}</span></li>
            <li className="list-group-item">Number of pallets: <span className="font-weight-bold">{shipment.pallets}</span></li>
            <li className="list-group-item">State: <span className="font-weight-bold">{shipment.state}</span></li>
            <li className="list-group-item">
              {isLoading &&
                <a href={`/profile/${shipment.author._id}`}>
                  <button className="btn btn-info">See Sender Details</button>
                </a>
              }
              {isTransportist && (
                <button className="btn btn-primary btn-lg" onClick={startNegotiation}>
                  Negotiate Shipment
                </button>
              )}

              <div>
                {!isTransportist && (
                  <TransportistCard />
                )}
              </div>

              {!isTransportist && (
                <SenderChatComponent className="mt-5" />
              )}

              {isTransportist && (
                <DriverChatComponent className="mt-5" />
              )}
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <TransportistCard className="mt-10" />
        </div>
      </div>
    </div>


  );
}
export default ShipmentDetails;



