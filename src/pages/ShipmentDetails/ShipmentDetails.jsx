import React, { useState, useEffect, useContext } from "react";
import ShipmentsService from "../../services/shipments.service";
import { useParams } from "react-router-dom";
import "../../pages/MyCargos/MyCargos.css";
import SenderChatComponent from "../../components/Chat/SenderChatComponent"
import DriverChatComponent from "../../components/Chat/DriverChatComponent"
import OffersReceivedComponent from "../../components/OffersReceivedComponent/OffersReceivedComponent"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"



function ShipmentDetails() {

  const { id } = useParams();
  const [shipment, setShipment] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { user, authenticateUser, isTransportist, getToken } = useContext(AuthContext);

  useEffect(() => {
    const shipmentsService = new ShipmentsService(getToken());
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
      {isLoading &&
      <Link to={`/profile/${shipment.author._id}`}>
            {/* <Route path="/:idShipment" component={ShipmentDetails} /> */}
            <button className="detailsbutton">See Details</button>
          </Link>
      }
      <hr/>
      <h2>Offers Received</h2>
      <OffersReceivedComponent />
      <hr/>
      {!isTransportist && (
      < SenderChatComponent />
      )}

      {isTransportist && (
      < DriverChatComponent />
      )}
      </div>
      
  );
}
export default ShipmentDetails;