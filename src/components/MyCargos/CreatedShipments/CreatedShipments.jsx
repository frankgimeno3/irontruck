import React, { useContext, useState, useEffect } from "react";
// import ShipmentsService from "../../../services/shipments.service";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';
import ProfileService from "../../../services/profile.service";
import { AuthContext } from "../../../context/auth.context";
import CardShipment from "../../CardShipment/CardShipment"

function CreatedShipments() {
  const { user } = useContext(AuthContext)
  const [shipments, setShipments] = useState([]);

  console.log("hello")

  useEffect(() => {
    const profileService = new ProfileService();
    //   profileService
    profileService.getProfile(user._id)
      .then((response) => {

        setShipments(response.data.createdShipments)
      })
      .catch((err) => { console.log(err) });
  }, []);


  return (
    <div className="bg-dark-subtle">
      <h2 className="text-body-emphasis">Created Shipments</h2>


      {shipments.map((shipment) => (
        <CardShipment />

      ))}
    </div>
  );
};

export default CreatedShipments;




