import React, { useContext, useState, useEffect } from "react";
// import ShipmentsService from "../../../services/shipments.service";
import { Link } from "react-router-dom";
import "../../CargoExchange/CargoExchange.css";
import '../../../pages/MyCargos/MyCargos.css';
import ProfileService from "../../../services/profile.service";
import { AuthContext } from "../../../context/auth.context"
import CardShipment from "../../CardShipment/CardShipment"

function NegotiatingShipments() {
  const { user } = useContext(AuthContext)
  const [shipments, setShipments] = useState([]);


  useEffect(() => {
    const profileService = new ProfileService();
    //   profileService
    profileService.getProfile(user._id)
      .then((response) => {

        setShipments(response.data.createdShipments)
      })
      .catch((err) => { console.log(err) });
  }, []);

  // useEffect(() => {
  //   const profileService = new ProfileService();
  //   //   profileService
  //   profileService.getProfile(user._id)
  //     .then((response) => {

  //       setShipments(response.data.currentShipments)
  //     })
  //     .catch((err) => { console.log(err) });
  // }, []);



  return (
    <div className="bg-dark-subtle">
      <h2 className="text-body-emphasis">Created Shipments</h2>


      {shipments
        .filter((shipment) => shipment.state === "inNegotiation")
        .map((shipment) => (


          <CardShipment />



        ))}
    </div>

  );
};

export default NegotiatingShipments;




