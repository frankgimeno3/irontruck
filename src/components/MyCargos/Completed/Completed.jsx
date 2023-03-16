/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';
import ProfileService from "../../../services/profile.service";
import { AuthContext } from "../../../context/auth.context"


function CreatedShipments() {
  const { user } = useContext(AuthContext)
  const [shipments, setShipments] = useState([]);
  useEffect(() => {
    const profileService = new ProfileService();

    profileService.getProfile(user._id)
      .then((response) => {

        setShipments(response.data.createdShipments)
      })
      .catch((err) => { console.log(err) });
  }, []);

  return (
    <div>
      <h2>Created Shipments</h2>
      {shipments
        .filter((shipment) => shipment.state === "Completed")
        .map((shipment) => (
          shipment.state === "inNegotiation" &&
          <div key={shipment._id} className="card">
            <div className="shipment-info">
              <p>Creation Date: {shipment.creationDate}</p>
              <p>Shipment pallets: {shipment.pallets}</p>
            </div>
            <div className="shipment-address">
              <div className="pickup-address">
                <p>Pick up direction: {shipment.pickUpDireccion}</p>
                <p>Pick up province: {shipment.pickUpProvince}</p>
              </div>
              <div className="delivery-address">
                <p>Delivery direction: {shipment.deliveryDireccion}</p>
                <p>Delivery province: {shipment.deliveryProvince}</p>
              </div>
            </div>
            <Link to={`/shipments/${shipment._id}`}>
              <button className="detailsbutton">See Details</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CreatedShipments;